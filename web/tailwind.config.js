// @type {import('tailwindcss').Config}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        summer: {
          100: '#F1F5FF',
          500: '#00ac86',
          900: '#004b54',
        },
      },
    },
  },
  plugins: [],
};
