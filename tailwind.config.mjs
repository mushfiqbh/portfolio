/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./UI/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        body: "var(--color-body)",
        heading: "var(--color-heading)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-box": "var(--gradient-box)",
        "gradient-red": "var(--gradient-red-hover)",
      },
      boxShadow: {
        shadow1: "var(--shadow-1)",
        shadow2: "var(--shadow-2)",
      },
    },
  },
  plugins: [],
};
