// seed-data.js
// Initial products to populate on first load
// These will be automatically added to localStorage if no products exist

const SEED_PRODUCTS = [
    {
        id: 1708012345001,
        name: "Amethyst Cluster",
        price: "2500",
        category: "healing",
        badge: "NEW ARRIVAL",
        description: "Premium quality natural amethyst cluster from Brazil. Known as the Stone of Spirituality, it promotes calm, balance, and peace. Perfect for meditation spaces and energy healing.",
        benefits: ["Enhances intuition and meditation", "Relieves stress and anxiety", "Opens third eye chakra", "Promotes peaceful sleep"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23E6E6FA' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dy='.3em'%3E💎%3C/text%3E%3C/svg%3E",
        createdAt: new Date().toISOString()
    },
    {
        id: 1708012345002,
        name: "Rose Quartz Heart",
        price: "1800",
        category: "love",
        badge: "POPULAR",
        description: "Beautiful hand-carved rose quartz heart crystal. The ultimate stone of unconditional love and infinite peace. Opens the heart chakra and promotes self-love.",
        benefits: ["Attracts love and romance", "Heals emotional wounds", "Opens heart chakra", "Promotes compassion and forgiveness"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23FFB6C1' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dy='.3em'%3E💗%3C/text%3E%3C/svg%3E",
        createdAt: new Date().toISOString()
    },
    {
        id: 1708012345003,
        name: "Clear Quartz Point",
        price: "1500",
        category: "healing",
        badge: "BESTSELLER",
        description: "Master healing crystal that amplifies energy and intentions. Ideal for manifestation, clarity, and energy cleansing. Known as the Universal Crystal.",
        benefits: ["Amplifies energy and intentions", "Enhances clarity and focus", "Cleanses negative energy", "Programmable for any purpose"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23F0F8FF' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dy='.3em'%3E✨%3C/text%3E%3C/svg%3E",
        createdAt: new Date().toISOString()
    },
    {
        id: 1708012345004,
        name: "Black Tourmaline",
        price: "2200",
        category: "protection",
        badge: "LIMITED",
        description: "Powerful protection stone that shields against negative energy and EMF radiation. Grounding and purifying for your sacred space. Essential for energy protection.",
        benefits: ["Protects against negative energy", "Shields from EMF radiation", "Grounds and centers energy", "Purifies environment"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23696969' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dy='.3em'%3E🌙%3C/text%3E%3C/svg%3E",
        createdAt: new Date().toISOString()
    },
    {
        id: 1708012345005,
        name: "Citrine Cluster",
        price: "2800",
        category: "abundance",
        badge: "NEW ARRIVAL",
        description: "Natural citrine cluster known as the Merchant's Stone. Attracts wealth, prosperity, and success. Energizes and revitalizes the solar plexus chakra.",
        benefits: ["Attracts abundance and prosperity", "Increases confidence and willpower", "Energizes solar plexus chakra", "Promotes success in business"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23FFD700' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dy='.3em'%3E✨%3C/text%3E%3C/svg%3E",
        createdAt: new Date().toISOString()
    },
    {
        id: 1708012345006,
        name: "Selenite Wand",
        price: "1200",
        category: "clarity",
        badge: "",
        description: "Pure white selenite wand for cleansing and charging other crystals. Brings clarity of mind and deep peace. Never needs cleansing itself.",
        benefits: ["Cleanses and charges other crystals", "Promotes mental clarity", "Connects to higher consciousness", "Creates peaceful environment"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23FFFAF0' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dy='.3em'%3E🤍%3C/text%3E%3C/svg%3E",
        createdAt: new Date().toISOString()
    }
];

// Function to initialize products if none exist
function initializeProducts() {
    const existingProducts = localStorage.getItem('astrodove_products');
    
    if (!existingProducts || existingProducts === '[]') {
        localStorage.setItem('astrodove_products', JSON.stringify(SEED_PRODUCTS));
        console.log('✅ Seed products loaded:', SEED_PRODUCTS.length, 'products');
        return SEED_PRODUCTS;
    } else {
        const products = JSON.parse(existingProducts);
        console.log('ℹ️ Products already exist:', products.length, 'products');
        return products;
    }
}

// Auto-initialize on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function() {
        initializeProducts();
    });
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEED_PRODUCTS, initializeProducts };
}
