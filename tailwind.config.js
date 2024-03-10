/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'var(--bg-gradient-colors)',
      },
      boxShadow: {
        'box-shadow': '0px 0px 15px 0px rgba(0, 0, 0, 0.06)',
        'box-shadow-white': '0px 0px 20px 0px rgba(255, 255, 255, 0.2)'
      },
      screens: {
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
};
