import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9db4ab',
          hover: '#8ca299',
        },
        secondary: '#b8a99d',
        tertiary: '#d4b5a8',
        'bg-primary': '#f5f3f0',
        'bg-secondary': '#e8e5df',
        'bg-card': '#fdfcfa',
        'text-primary': '#3a3a3a',
        'text-secondary': '#6b6b6b',
        'border-color': '#d4cdc6',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Segoe UI',
          'Tahoma',
          'Geneva',
          'Verdana',
          'sans-serif',
        ],
      },
      boxShadow: {
        'card': '0 4px 15px rgba(97, 97, 97, 0.1)',
        'card-hover': '0 6px 20px rgba(97, 97, 97, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
