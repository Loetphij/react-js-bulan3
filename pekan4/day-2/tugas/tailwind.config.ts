import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ ini penting banget

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
      },
    },
  },

  plugins: [],
};

export default config;
