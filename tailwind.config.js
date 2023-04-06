/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textSizeAdjust: 'none',
      colors:{
        thBlue:'#35EEED',
        thOrange:'#F9A23F',
        thPurple:'#ED02FF'
      }
    },
  },
  plugins: [],
}
