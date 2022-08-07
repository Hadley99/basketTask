/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        inputShadow:
          "0 3px 9px rgb(50 50 9 / 0%), 0px 4px 8px rgb(0 131 255 / 30%)",
      },
    },
  },
  plugins: [],
};
