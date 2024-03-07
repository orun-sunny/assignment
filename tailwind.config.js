/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}', './src/input.css'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Mask group.png')",
      },
      colors: {
        backgroud: '#171B1A'
      }
    },
  },
  plugins: [],
}