/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "black": "#000000",
      "black-bg": "#060215",
      white: "#F8F8F8",
      "gray-100": "#E6E5E5",
      "gray-300": "#C2BDBD",
      "lima-100": "#C1FF72",
      "lima-200": "#8CBB51",
      "lima-300": "#45592C",
    },
    fontSize: {
      "heading-xl": "36px",
      "heading-lg": "30px",
      "heading-md": "20px",
      "heading": "16px",
      "heading-sm": "14px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
