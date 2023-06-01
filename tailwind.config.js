/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEC00A",
      },
      height: {
        18: "72px",
      },
      width: {
        container: "90%",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    screens: {
      "3xl": { min: "2560px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "376px" },
    },
  },
  plugins: [],
};
