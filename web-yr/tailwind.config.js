/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-ivory': '#F3ECDB',
        'c-orange': '#ED6833',
        'c-blue': '#2674A8',
      }
    },
  },
  plugins: [],

}