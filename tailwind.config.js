/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    colors: {
      transparent: "transparent",
      color_green: "#3A5041",
      text_white: "#fff",
      text_link_dark: "#00264B",
      text_link_light: "#BEBFBE",
      bg_btn: "#B58269",
      bg_block_image: "#636A6A",
      text_black: "#161616",
    },
  },
  plugins: [],
};
