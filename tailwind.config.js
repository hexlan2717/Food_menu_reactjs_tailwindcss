//** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Bree: ["Bree Serif", "serif"],
       Monty: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}