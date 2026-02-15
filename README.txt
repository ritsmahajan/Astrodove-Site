🚀 ASTRODOVE - FINAL FILES WITH AIRTABLE
=========================================

✅ ALL LATEST FILES INCLUDED!

═══════════════════════════════════════════════════════════

📁 FILES INCLUDED (12 total):
==============================

WEBSITE PAGES (7 files):
1. index.html ✅ (Homepage - loads from Airtable)
2. products.html ✅ (Products page - loads from Airtable)
3. services.html ✅
4. about.html ✅
5. contact.html ✅
6. admin-login.html ✅
7. admin-dashboard.html ✅

CONFIGURATION (2 files):
8. config-airtable.js ✅ (NEW - Airtable connection)
9. _headers ✅ (Cloudflare headers)

ASSETS (1 file):
10. Astrodove_logo_transparent.png ✅

OTHER (1 file):
11. .gitignore ✅

═══════════════════════════════════════════════════════════

⚡ QUICK SETUP (3 STEPS):
=========================

STEP 1: Update config-airtable.js
----------------------------------
Open config-airtable.js and add YOUR credentials:

Line 5: personalAccessToken: 'YOUR_TOKEN_HERE'
Line 8: baseId: 'YOUR_BASE_ID_HERE'
Line 11: tableName: 'Products'

Get these from:
- Token: https://airtable.com/create/tokens
- Base ID: https://airtable.com/api (click your base)

STEP 2: Upload to Cloudflare Pages
-----------------------------------
1. Push all files to GitHub
2. Connect to Cloudflare Pages
3. Deploy

OR

1. Go to Cloudflare Pages
2. Drag all 11 files
3. Deploy

STEP 3: Test
------------
1. Visit: your-site.pages.dev/products.html
2. See products load from Airtable
3. ✅ Working!

═══════════════════════════════════════════════════════════

📊 AIRTABLE TABLE STRUCTURE:
=============================

Your Airtable needs these columns:

REQUIRED:
- Name (Single line text)
- Price (Number)
- Category (Single select: Healing, Love, Protection, Abundance, Clarity, Chakra)
- Description (Long text)
- Benefits (Long text - comma separated)
- Image (Attachment)

OPTIONAL:
- Badge (Single select: NEW ARRIVAL, BESTSELLER, POPULAR, LIMITED)
- Created (Created time)

═══════════════════════════════════════════════════════════

🎯 YOUR 5 PRODUCTS:
===================

Add these to Airtable:

1. Peru Pyrite Cluster - ₹3,500 (Abundance)
2. Amethyst 3-Line Necklace - ₹2,800 (Healing)
3. Citrine 3-Line Necklace - ₹3,200 (Abundance)
4. Pyrite Anklet - ₹1,800 (Protection)
5. Peach Moonstone Faceted Bracelet - ₹2,400 (Love)

═══════════════════════════════════════════════════════════

✅ WHAT'S WORKING:
==================

✅ Homepage (index.html)
   - Shows latest 4 products from Airtable
   - Hero section
   - Services preview
   - Contact info

✅ Products Page (products.html)
   - Loads all products from Airtable
   - Filter by category
   - Shows images from Airtable
   - "Inquire Now" buttons

✅ Services Page
   - Lists all 9 services
   - Pricing info
   - Contact button

✅ About Page
   - Your story
   - Mission
   - Values

✅ Contact Page
   - Contact form (FormSubmit)
   - Email: ritsmahajan23@outlook.com
   - Phone: +91 7507303192

✅ Admin Login
   - Username: rits_astrodove
   - Password: lB*Wkq#4rFJFGJrN
   - (Can still use for admin access)

✅ Airtable Integration
   - Fetches products from Airtable API
   - Displays images from Airtable
   - 5-minute caching for speed
   - Automatic updates

═══════════════════════════════════════════════════════════

🔧 CREDENTIALS YOU NEED:
=========================

FROM AIRTABLE:
1. Personal Access Token (starts with pat...)
2. Base ID (starts with app...)
3. Table Name (usually "Products")

WHERE TO ADD:
File: config-airtable.js
Lines: 5, 8, 11

═══════════════════════════════════════════════════════════

💰 COSTS:
=========

Airtable: FREE (1,200 records, 2 GB storage)
Cloudflare Pages: FREE (unlimited bandwidth)
Domain: Optional (₹500-1000/year)

TOTAL: ₹0/month! 🎉

═══════════════════════════════════════════════════════════

📱 MOBILE:
==========

✅ All pages mobile responsive
✅ Airtable mobile app available
✅ Manage products from phone
✅ Take photos directly in Airtable

═══════════════════════════════════════════════════════════

🐛 TROUBLESHOOTING:
===================

Products not loading?
→ Check config-airtable.js has correct credentials
→ Check browser console (F12) for errors
→ Verify Airtable token has data.records:read scope

Images not showing?
→ Make sure images uploaded to Airtable
→ Image field type should be "Attachment"
→ Check image URLs in browser console

"Loading products..." forever?
→ Token or Base ID incorrect
→ Table name doesn't match
→ Check Airtable API status

═══════════════════════════════════════════════════════════

✅ DEPLOYMENT CHECKLIST:
=========================

BEFORE DEPLOYING:
□ Airtable base created with Products table
□ 5 products added with images
□ Personal Access Token generated
□ Base ID copied
□ config-airtable.js updated with credentials
□ All 11 files ready

DEPLOY:
□ Upload to GitHub or Cloudflare
□ Wait for deployment
□ Visit website

TEST:
□ Homepage loads
□ Products page shows products from Airtable
□ Images display correctly
□ Filter buttons work
□ Contact form works
□ Mobile responsive

═══════════════════════════════════════════════════════════

🎉 YOU'RE READY!
================

1. Update config-airtable.js with YOUR credentials
2. Upload all files to Cloudflare Pages
3. Deploy
4. ✅ Your website is LIVE with Airtable database!

Questions? Check browser console for error messages!

Good luck! 🚀
