/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        WorkSans: ["Work Sans", "sans-serif"],
        Exo: ["Exo", "sans-serif"],
        Exo2: ["Exo 2", "sans-serif"],
        Merienda: ["Merienda", "cursive"],
        ModernAntiqua: ["Modern Antiqua", "cursive"],
        Macondo: ["Macondo", "cursive"],
      },
    },
  },
  plugins: [],
};
