/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'actRejection':['actRejection']
    },
    boxShadow: {
      'custom-shadow': ['6px 6px 12px 0px rgba(47, 47, 47, 0.05)'], // Tailwind accepts rgba for colors
    },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}