/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl':'2560px',
      'sl':'1440px'

    },
    aspectRatio: {
        '4/3': '1/ 3',
      },
    extend: {
    },
  },
  plugins: [],
}
