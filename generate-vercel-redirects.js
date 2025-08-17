// generate-vercel-redirects.js
const fs = require('fs');
const path = require('path');

try {
  // Load your generatorDetails
  const { generatorDetails } = require('./data/generatorsData');

  // Generate redirects
  const redirects = Object.keys(generatorDetails).map((slug) => ({
    source: `/${slug}`,
    destination: `/generators/${slug}`,
    permanent: true,
  }));

  // Write to vercel.json
  const vercelConfig = { redirects };
  fs.writeFileSync(
    path.join(__dirname, 'vercel.json'),
    JSON.stringify(vercelConfig, null, 2)
  );

  console.log(`✅ Successfully generated vercel.json with ${redirects.length} redirects!`);
} catch (error) {
  console.error('❌ Error generating vercel.json:', error.message);
}