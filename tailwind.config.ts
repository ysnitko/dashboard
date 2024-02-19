import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-log-out": "url('/assets/log-out.svg')",
      },
      colors: {
        "bg-color": "#F4F2FF",
        "bg-table-primary": "#FFFFFF",
        "text-header": "#6E6893",
        "text-btn-filter": "#6E6893",
        "text-total-prise": "#6D5BD0",
        "border-clr": "#C6C2DE",
        "bg-btn-dues":"#6D5BD0",
        "clr-primary": "#25213B"
        // "bg-active-btn": "#E65F2B",
        // "clr-text-menu": "#F1F1F1",
        // "clr-new-project": "#171717",
        // "bg-page": "#EBDFD7",
        // "bg-section": "rgba(255, 255, 255, 0.34)",
        // "clr-text-position": " rgba(41, 45, 50, 0.44)",
        // "bg-btn-edit": "#1A932E",
        // "bg-btn-delete": "#EE201C",
        // "clr-text-table": "#797979",
        // "clr-status-active": "#1A932E",
      },
      fontFamily: {
        "ff-main":"Inter",
      },
    },
  },
  plugins: [],
};
export default config;
