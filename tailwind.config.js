/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Nunito Sans, sans-serif" },

    extend: {
      colors: {
        cmDarkBlue: "hsl(209, 23%, 22%)",
        cmVeryDarkBlue: " hsl(207, 26%, 17%)",
        cmVeryVeryDarkBlue: "hsl(200, 15%, 8%)",
        cmDarkGray: "hsl(0, 0%, 52%)",
        cmVeryLightGray: "hsl(0, 0%, 98%)",
        cmWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
