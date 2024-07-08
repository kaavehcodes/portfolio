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
        primary: "#006AFF",
        white: "#EFF1F3",
        timberwolf: "#DBD3D8",
        sand: "#D8B4A0",
        burnt: "#D77A61",
        twitter: "#1DA1F2",
        dribbbledark: "#C32361",
        dribbblepink: "#EA4C89",
        github: "#1F2328",
        linkedin: "#2867B2"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
