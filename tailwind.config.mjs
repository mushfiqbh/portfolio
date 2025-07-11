/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        pink: "var(--color-pink)",
        body: "var(--color-body)",
        heading: "var(--color-heading)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-box": "var(--gradient-box)",
        "gradient-red": "var(--gradient-red-hover)",
        "--gradient-text":
          "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500;",
      },
      boxShadow: {
        shadow1: "var(--shadow-1)",
        shadow2: "var(--shadow-2)",
      },
      animation: {
        fade: "fade 2s infinite ease-in-out",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
