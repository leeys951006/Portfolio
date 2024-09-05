/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
      },
      height: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
      },
    },
  },
  plugins: [],
}