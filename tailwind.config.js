/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        "floating-wool": {
          "0%, 100%": {
            opacity: 1,
            transform: 'translateY(0px)'
          },
          "50%": {
            transform: 'translateY(-10px)'
          }      
        }
      },
      animation: {
        "floating-wool": "1.5s infinite linear floating-wool"
      }
    },
  },
  plugins: [],
};
