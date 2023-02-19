/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'blue': '#404EED',
            'black': '#23272A',
            'black-hover': '#36393F',
            'white-hover': '#F7DFFA',
            'bg-white': '#F6F6F6'
          },
        fontFamily: {
            'mont': 'Montserrat',
            'open': 'Open Sans'
        },
      },
    },
    plugins: [],
  }







