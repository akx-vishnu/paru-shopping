/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dca622", // aesthetic yellow
        secondary: "#111827", // rich black
        accent: "#ffffff",
      },
    },
  },
  plugins: [],
}
