/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,php}'],
  theme: {
    extend: {
      colors: {
        'primary': '#7613C7',
      },
      fontFamily: {
        sans: [
          "Poppins, Helvetica, sans-serif",
        ]
      }
    },
  },
  plugins: [],
}