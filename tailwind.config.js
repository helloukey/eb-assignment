/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eb: "#CADB7F",
        button: "#146531"
      },
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "750px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
