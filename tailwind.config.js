/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, css}"],
  theme: {
    extend: {
      colors:{
        'blue-facebook':'#1877f2',
        'gray-facebook':'#f0f2f5',
        'green-facebook':'#36A420'
      },
      spacing:{
        '580':'36.25rem',
        '380':'23.75rem'
      }
    },
  },
  plugins: [],
}
