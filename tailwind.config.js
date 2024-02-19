/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'black':'#111',
        'green':'#14CF93'
      },
      height: {
        '0vh': '0vh',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display':['Satisfy', 'cursive'],
      },
      fontWeight: {
        'thin': '100',
        'normal': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
}

