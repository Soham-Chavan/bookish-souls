/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
      },
      boxShadow: {
        'neon-glow': '0px 0px 13px 3px rgba(57, 255, 20, 0.6)',
      },
    },
  },
  plugins: [],
};
