/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        background: '#FEF9F6',
        primary: '#D64926',
        primaryHover: '#992609',
        secondary: '#FDE7DF',
        tertiary: '#F7B99E',
        quaternary: '#F5C8B5',
        quinary: '#4D272B',
        senary: '#ACA3AA',
        septenary: '#E49467',
        octonary: '#537695',
        highlight: '#FDC435',
      },
      keyframes: {
        floating: {
          '0%, 100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        floating: '2s infinite linear floating',
      },
      gridTemplateColumns: {
        card: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
