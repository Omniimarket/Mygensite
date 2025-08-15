// scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// Import your data files
// We use 'require' here because this is a Node.js script, not a React component,
// and it's being run outside of the Next.js build bundle.
const { generatorDetails } = require('../data/generatorsData');
const { categories } = require('../data/categories');

const BASE_URL = 'https://www.marketproedge.com'; // Your website's base URL
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml'); // Output path for the sitemap

function generateSitemap() {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

  // 1. Add Static Pages
  const staticPaths = [
    { loc: '/', priority: '1.0' },
    { loc: '/all-generators', priority: '0.8' },
    // Add other static pages you have in your 'pages' directory that are not dynamic
    // Confirm these pages actually exist in your project (e.g., pages/about.js)
    { loc: '/about', priority: '0.7' },
    { loc: '/contact', priority: '0.7' },
    { loc: '/privacy-policy', priority: '0.6' },
    { loc: '/terms-of-service', priority: '0.6' },
  ];

  staticPaths.forEach(page => {
    sitemapContent += `
  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // 2. Add Dynamic Category Pages
  // Filter out any categories that might be malformed or missing a slug
  const validCategories = categories.filter(category =>
    typeof category === 'object' && category !== null &&
    typeof category.slug === 'string' && category.slug.length > 0
  );

  validCategories.forEach(category => {
    sitemapContent += `
  <url>
    <loc>${BASE_URL}/categories/${category.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>`;
  });

  // 3. Add Dynamic Generator Pages
  Object.keys(generatorDetails).forEach(slug => {
    sitemapContent += `
  <url>
    <loc>${BASE_URL}/generators/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>`;
  });

  sitemapContent += `
</urlset>`;

  // Write the sitemap to the public directory
  fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
  console.log(`Sitemap generated successfully at ${SITEMAP_PATH}`);
}

// Execute the function when the script is run
generateSitemap();
