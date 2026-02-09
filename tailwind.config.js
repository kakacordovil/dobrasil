/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // ou 'class' se fores usar modo escuro depois
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // se tiver app router
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          light: "#F5F3FF",
          primary: "#7C3AED",
          dark: "#6D28D9",
        },
      },
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Open Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
