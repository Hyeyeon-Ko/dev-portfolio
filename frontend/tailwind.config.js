/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        accent: "#a855f7",
        background: "#f8fafc",
        dark: "#1e293b",
      },
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Noto Serif KR", "serif"],
        brand: ["Pretendard Variable", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
