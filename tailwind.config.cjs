/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mod: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0d0d0d',
        secondary: '#5e6d8c'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jbMono: ['JetBrains Mono NL', 'monospace', '"Courier New"', 'Consolas']
      }
    }
  },
  plugins: []
};
