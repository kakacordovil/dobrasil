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
        brand: {
          green: "#0F3D2E",     // verde escuro elegante (marca)
          greenSoft: "#E6F2EE", // fundo suave
          yellow: "#F4C430",    // amarelo destaque
          yellowSoft: "#FFF4CC",
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
