import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-light-hover": "#BEADFF",
        "purple-light": "#EFEBFF",
        "gray-dark": "#737373",
        "gray-medium": "#D9D9D9",
        "gray-light": "#FAFAFA",
        red: "#FF3939",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        instrumentSans: ["var(--font-instrumentSans)"],
      },
    },
  },
  plugins: [],
};
export default config;
