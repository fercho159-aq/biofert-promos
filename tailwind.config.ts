import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#E8F5E9",
          500: "#4CAF50",
          600: "#388E3C",
        },
        blue: {
          600: "#1E88E5",
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
