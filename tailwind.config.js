/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // CRITICAL: Add this safelist to ensure dynamic color classes are generated
  // This is an even more aggressive pattern to catch all variations.
  safelist: [
    // Matches any utility class that starts with bg-, text-, border-, from-, or to-
    // followed by any of your specific colors, and any shade from 100 to 900.
    // It also explicitly includes 'hover:' variants.
    {
      pattern: /(bg|text|border|from|to)-(blue|green|purple|yellow|red|teal|orange|cyan|pink|indigo|lime|fuchsia)-(\d{2}0|300|400|500|600|700|800|900)/,
      variants: ['hover'],
    },
    // Also explicitly safelist the base border color if it's not dynamic
    'border-blue-700',
    'hover:border-blue-500',
  ],
  plugins: [],
};
