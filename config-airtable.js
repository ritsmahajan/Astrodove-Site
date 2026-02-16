// config-airtable.js
// Airtable Configuration for Astrodove

// ⚠️ REPLACE THESE WITH YOUR ACTUAL AIRTABLE CREDENTIALS
const AIRTABLE_CONFIG = {
    // Get from: Airtable Developer Hub → Personal Access Tokens
    personalAccessToken: 'patghQ46T8yN85Dle.aa38eada0e3b0d2622dd25f73b0324fe4218f031fabfa60f34ebc5a7c0fa35e9', // Starts with 'pat...'
    
    // Get from: Airtable API docs → Your base
    baseId: 'appbcd6mLcGjNCCsv', // Starts with 'app...'
    
    // Your table name (exactly as shown in Airtable)
    tableName: 'Products'
};

// Airtable API endpoint
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableName}`;

// Function to fetch all products from Airtable
async function fetchProductsFromAirtable() {
    try {
        const response = await fetch(AIRTABLE_API_URL, {
            headers: {
                'Authorization': `Bearer ${AIRTABLE_CONFIG.personalAccessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Airtable API error: ${response.status}`);
        }

        const data = await response.json();
        
        // Transform Airtable records to our product format
        const products = data.records.map(record => {
            const fields = record.fields;
            
            return {
                id: record.id,
                name: fields.Name || '',
                price: fields.Price || 0,
                category: mapCategory(fields.Category),
                badge: fields.Badge || '',
                description: fields.Description || '',
                benefits: fields.Benefits ? fields.Benefits.split(',').map(b => b.trim()) : [],
                image: fields.Image && fields.Image[0] ? fields.Image[0].url : '',
                createdAt: fields.Created || record.createdTime
            };
        });

        console.log('✅ Loaded', products.length, 'products from Airtable');
        return products;
        
    } catch (error) {
        console.error('❌ Error fetching from Airtable:', error);
        return [];
    }
}

// Map Airtable category to website category format
function mapCategory(airtableCategory) {
    const categoryMap = {
        'Healing': 'healing',
        'Love': 'love',
        'Protection': 'protection',
        'Abundance': 'abundance',
        'Clarity': 'clarity',
        'Chakra': 'chakra'
    };
    return categoryMap[airtableCategory] || 'healing';
}

// Cache products to avoid too many API calls
let cachedProducts = null;
let cacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function getProducts() {
    const now = Date.now();
    
    // Return cached products if still fresh
    if (cachedProducts && cacheTime && (now - cacheTime) < CACHE_DURATION) {
        console.log('ℹ️ Using cached products');
        return cachedProducts;
    }
    
    // Fetch fresh data
    const products = await fetchProductsFromAirtable();
    cachedProducts = products;
    cacheTime = now;
    
    return products;
}

// Initialize on page load
console.log('🔗 Airtable connection initialized');
