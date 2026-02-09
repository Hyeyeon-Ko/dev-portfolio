/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        accent: "#a855f7",
        dark: "#1e293b",
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
        serif: ["Noto Serif KR", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
