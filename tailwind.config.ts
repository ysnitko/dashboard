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
        "bg-leftmenu": "#060606",
        "bg-active-btn": "#E65F2B",
        "clr-text-menu": "#F1F1F1",
        "clr-new-project": "#171717",
        "bg-page": "#EBDFD7",
        "bg-section": "rgba(255, 255, 255, 0.34)",
        "clr-text-position": " rgba(41, 45, 50, 0.44)",
        "bg-btn-edit": "#1A932E",
        "bg-btn-delete": "#EE201C",
        "clr-text-table": "#797979",
        "clr-status-active": "#1A932E",
      },
      fontFamily: {
        "ff-main":"Aeonik Pro TRIAL",
      },
    },
  },
  plugins: [],
};
export default config;
