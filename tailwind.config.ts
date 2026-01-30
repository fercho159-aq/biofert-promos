import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E3A8A",
          800: "#0E1555",
          900: "#070B2E",
        },
        accent: {
          300: "#7DD8DF",
          400: "#4EC3CD",
          500: "#3AAFB8",
          600: "#2A8F97",
        },
        gold: {
          400: "#D4A843",
        },
      },
    },
  },
  plugins: [],
};
export default config;
