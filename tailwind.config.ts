import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "bg-leftmenu": "#060606",
        "bg-active-btn": "#E65F2B",
        "clr-text-menu": "#F1F1F1",
        "clr-new-project": "#171717",
        "bg-page": "#EBDFD7",
        "clr-text-position": " rgba(41, 45, 50, 0.44)",
        "bg-btn-block": "#DFA510",
        "bg-btn-delete": "#EE201C",
        "clr-text-table": "#797979",
        "clr-status-active": "#1A932E",
      },
    },
  },
  plugins: [],
};
export default config;
