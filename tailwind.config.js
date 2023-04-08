/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.js", "./src/**/**.js"],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1280px" },
    },
    extend: {},
  },
  plugins: [],
};
