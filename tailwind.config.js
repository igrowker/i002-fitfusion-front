/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        large: "1.8rem",
      },
      boxShadow: {
        'custom': '0px 8px 24px 0px rgba(74, 136, 12, 1)',
      },
      backgroundImage: {
        pattern: "url('/src/assets/bg.png')",
        patternInstructors: "url('/src/assets/bgInstructors.png')",
      },
    },
    colors: {
      black: "#000000",
      "black-bg": "#060215",
      "footer-gray": "#E9EDF7",
      white: "#F8F8F8",
      "gray-100": "#E6E5E5",
      "gray-300": "#C2BDBD",
      "gray-400": "#BFBFBF",
      "gray-500": "#7F7F7F",
      "lima-100": "#C1FF72",
      "lima-200": "#8CBB51",
      "lima-300": "#45592C",
      "lima-400": "#86BA43",
      "lima-500": "#4A880C",
      "lima-500": "#8FFF00",
      "green-100": "#17B530",
    },
    fontSize: {
      "heading-xl": "36px",
      "heading-lg": "30px",
      "heading-md": "20px",
      heading: "16px",
      "heading-sm": "14px",
      "heading-xs": "10px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      DMsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
