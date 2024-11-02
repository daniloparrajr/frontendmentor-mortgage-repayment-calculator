/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "red": "#D73328",
      "lime": "#D8DB2F",
      "slate-900": "#133041",
      "slate-700": "#4E6E7E",
      "slate-500": "#6B94A8",
      "slate-300": "#9ABED5",
      "slate-100": "#E4F4FD",
    },
    fontSize: {
      sm: ["14px", "1.5"],
      base: ["16px", "1.5"],
      md: ["18px", "1.25"],
      lg: ["24px", "1.25"],
      xl: ["56px", "1.25"],
    },
    spacing: {
      "0": "0",
      "100": "8px",
      "150": "12px",
      "200": "16px",
      "300": "24px",
      "400": "32px",
      "500": "40px",
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)'],
      },
    },
  },
  plugins: [],
};
