import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./website-code/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "bg-void": "#0A0A0C",
        "bg-primary": "#12121A",
        "bg-secondary": "#1A1A24",
        "accent-purple": "#A855F7",
        "accent-pink": "#EC4899",
      },
      borderRadius: {
        card: "20px",
        button: "999px",
      },
      fontFamily: {
        display: ["SF Pro Display", "PingFang SC", "sans-serif"],
        body: ["SF Pro Text", "PingFang SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
