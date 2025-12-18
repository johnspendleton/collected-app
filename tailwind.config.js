/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'sans': ['Outfit', 'sans-serif'],
      },
      screens: {
        'md': '1200px',  // Custom breakpoint at 1200px
        'lg': '1500px',  // Custom breakpoint at 1500px
      },
    },
  },
  plugins: [],
}
