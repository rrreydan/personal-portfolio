/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mod: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0d0d0d',
        secondary: '#3c4659'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
