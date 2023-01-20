/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gotham: ["GothamPro", "sans-serif"],
      "libre-baskerville": ["Libre Baskerville", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
