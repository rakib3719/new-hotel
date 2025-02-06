/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: '"Lato", sans-serif;',
        montserrat: '"Montserrat", sans-serif;',
        jost: '"Jost", sans-serif;'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#D3A87C",
        dark: "#000",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
