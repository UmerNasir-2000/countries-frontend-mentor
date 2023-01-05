/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlue: "hsl(207, 26%, 17%)",
      textColor: "hsl(0, 0%, 100%)",
      veryLightGray: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
