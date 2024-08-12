/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorDefault: 'var(--colorDefault)',
        backgroundBtn: 'var(--backgroundBtn)',
        borderMobile: 'var(--border-mobile)',
        white: 'var(--white)',
        black: 'var(--black)',
        orange: 'var(--orange)',
        red: 'var(--red)',
        backForm: 'var(--background-form)',
      },
      spacing: {
        linha: '1.5px',
      }
    },
  },
  plugins: [],
}
