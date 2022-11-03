/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#7e22ce',
        },
        dark: {
          primary: '#BB86FC',
          secondary: '#3700B3',
          text: {
            primary: '#dfdcd7',
            onPrimary: '#0b0c0d',
          },
          bg: {
            primary: '#0b0c0d',
            elevated: '#131516',
          },
        },
      },
      fontFamily: {
        heading: ["'Fira Sans'"],
        body: ["'Nunito'"],
      },
      scale: {
        200: '2',
        250: '2.5',
        300: '3',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
