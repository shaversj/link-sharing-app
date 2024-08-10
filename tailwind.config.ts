import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "bg-[#1a1a1a]",
    "bg-[#43b7e9]",
    "bg-[#2d68ff]",
    "bg-black",
    "bg-[#8a1a50]",
    "bg-[#333333]",
    "bg-[#2442ac]",
    "bg-[#302267]",
    "bg-[#ffffff]",
    "bg-[#eb4a25]",
    "bg-[#0330d1]",
    "bg-[$ed3fc8]",
    "bg-[#ee3939]",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-light-hover": "#BEADFF",
        "purple-light": "#EFEBFF",
        gray: "#737373",
        "project-gray": "#737373",
        "dark-gray": "#333333",
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
