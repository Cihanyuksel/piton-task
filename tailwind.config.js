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
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    screens: {
      "min-3xl": { min: "2560px" },
      "max-2xl": { max: "1535px" },
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "376px" },
    },
  },
  plugins: [],
};
