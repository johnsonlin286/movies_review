/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#E5E5E5',
        'secondary': '#929292',
        'dark': '#1E232B',
        'danger': '#FF0000'
      }
    },
  },
  plugins: [],
}
