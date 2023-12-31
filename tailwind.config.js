/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyBackground: '#f2f4f8',
      },
    },
    fontFamily: {
      appFont: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
