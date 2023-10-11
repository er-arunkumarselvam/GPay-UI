/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["11px", "16px"],
      sm: ["14px", "18px"],
      normal: ["16px", "20px"],
      base:["18px","20px"],
      lg: ["20px", "25px"],
    },
    extend: {},
  },
  plugins: [],
};

