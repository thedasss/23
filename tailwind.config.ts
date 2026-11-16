import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040D1A",
          900: "#081930", // Primary navy
          800: "#102B49", // Secondary navy
          700: "#1B3B60",
          600: "#2B507D",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F9F7F1", // Ivory
          200: "#F1DCAE", // Champagne gold
          300: "#E3C886",
          400: "#D3AA5B", // Metallic gold
          500: "#C49842",
          600: "#A87C2B",
          700: "#805B18",
        },
        ivory: "#F9F7F1",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "serif"],
        sans: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F1DCAE 0%, #D3AA5B 50%, #C49842 100%)",
        "gold-shimmer": "linear-gradient(90deg, #D3AA5B 0%, #F1DCAE 50%, #D3AA5B 100%)",
        "navy-gradient": "linear-gradient(180deg, #081930 0%, #102B49 100%)",
        "navy-radial": "radial-gradient(circle at center, #102B49 0%, #081930 100%)",
      },
      boxShadow: {
        "gold-sm": "0 2px 10px rgba(211, 170, 91, 0.15)",
        "gold-md": "0 8px 24px rgba(211, 170, 91, 0.22)",
        "gold-lg": "0 12px 36px rgba(211, 170, 91, 0.3)",
        "navy-card": "0 10px 30px -10px rgba(8, 25, 48, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
