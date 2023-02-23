/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        background: '#FDE7DF',
        primary: '#D64926',
        secondary: '#F7B99E',
        tertiary: '#F5C8B5',
        quaternary: '#4D272B',
        quinary: '#ACA3AA',
        senary: '#E49467',
        septenary: '#537695',
      },
      keyframes: {
        'floating-wool': {
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
        'floating-wool': '1.5s infinite linear floating-wool',
      },
    },
  },
  plugins: [],
};
