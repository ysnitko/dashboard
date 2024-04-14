import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-log-out': "url('/assets/log-out.svg')",
      },
      backgroundColor: {
        'bg-table-primary': '#FFFFFF',
        'bg-active-status': '#E6E6F2',
        'bg-paid-status': '#CDFFCD',
        'bg-unsalaried-status': '#FFECCC',
        'bg-overdue-status': '#FFE0E0',
        'bg-btn-dues': '#6D5BD0',
        'bg-header-user-profile': '#F2F0F9',
      },
      colors: {
        'bg-color': '#f2f1fa',
        'table-border-clr': '#D9D5EC',
        'text-header': '#6E6893',
        'text-btn-filter': '#6E6893',
        'text-total-prise': '#6D5BD0',
        'border-clr': '#C6C2DE',
        'clr-primary': '#25213B',
        'clr-active-status': '#4A4AFF',
        'clr-paid-status': '#007F00',
        'clr-unsalaried-status': '#965E00',
        'clr-overdue-status': '#D30000',
      },
      fontFamily: {
        'ff-main': 'Inter',
      },
    },
  },
  plugins: [],
};
export default config;
