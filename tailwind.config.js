/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#355B3E",
        secondary: "#F5DBC4",
        dimgreenButton: "#029664",
        dimgreenText: "#58745E",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
       
      },
    },
    screens: {
      xs: { max: "479px" },
      sm: { min: "480px",},
      md: { min: "620px" },
      lg: { min: "768px" },
      xl: { min: "1061px"},
      "2xl": { min: "1200px" },
      "3xl": { min: "1700px" },
    },
  },
  plugins: [],
 };
 