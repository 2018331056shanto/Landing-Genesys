/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        actRejection: ["actRejection"],
      },
      boxShadow: {
        "custom-shadow": ["6px 6px 12px 0px rgba(47, 47, 47, 0.05)"], // Tailwind accepts rgba for colors
      },
      colors: {
        "custom-red-start": "#DE2A2F",
        "custom-red-end": "#EF5256",
      },
      backgroundImage: {
        "complex-gradient":
          "linear-gradient(0deg, #1C1C1C, #1C1C1C), linear-gradient(0.83deg, rgba(0, 0, 0, 0.4) -1.08%, rgba(0, 0, 0, 0) 81.57%)",
      },
      boxShadow: {},

      boxShadow: {
        custom: "6px 6px 40px 0px #00000033",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
