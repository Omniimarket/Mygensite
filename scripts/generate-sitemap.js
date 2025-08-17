// scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// Import your data files
try {
  const { generatorDetails } = require('../data/generatorsData');
  const { categories } = require('../data/categories');

  const BASE_URL = 'https://www.marketproedge.com'; // ✅ No trailing spaces!
  const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');

  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // 1. Add Static Pages (ONLY if they exist in your project)
  const staticPaths = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/all-generators', priority: '0.8', changefreq: 'weekly' },
    // Uncomment below only if you have these pages
    // { loc: '/about', priority: '0.7', changefreq: 'monthly' },
    // { loc: '/contact', priority: '0.7', changefreq: 'monthly' },
    // { loc: '/privacy-policy', priority: '0.6', changefreq: 'yearly' },
    // { loc: '/terms-of-service', priority: '0.6', changefreq: 'yearly' },
  ];

  staticPaths.forEach((page) => {
    sitemapContent += `
  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // 2. Add Dynamic Category Pages
  const validCategories = (Array.isArray(categories) ? categories : []).filter(
    (cat) =>
      cat && typeof cat === 'object' &&
      typeof cat.slug === 'string' && cat.slug.trim().length > 0
  );

  validCategories.forEach((category) => {
    sitemapContent += `
  <url>
    <loc>${BASE_URL}/categories/${category.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // 3. Add Dynamic Generator Pages
  const generatorSlugs = Object.keys(generatorDetails);
  if (generatorSlugs.length === 0) {
    console.warn('⚠️ No generator details found. Check generatorDetails export.');
  }

  generatorSlugs.forEach((slug) => {
    sitemapContent += `
  <url>
    <loc>${BASE_URL}/generators/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  sitemapContent += `
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.dirname(SITEMAP_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap
  fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generated successfully at: ${SITEMAP_PATH}`);
  console.log(`   Total URLs: ${staticPaths.length + validCategories.length + generatorSlugs.length}`);
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error.message);
  process.exit(1);
}