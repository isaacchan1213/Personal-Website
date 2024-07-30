/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#070F2B", 
        moonYellow: "rgb(255, 250, 230)"
      },
      fontSize: {
        'h1': '35px'
      },
      fontWeight: {
        'bolder': '500',
      },
      screens: {
        'md': '900px',
      },
      animation: {
        'blink-shadow': 'blink-shadow 1s infinite',
        'blink-shadow-button': 'blink-shadow-button 1s infinite',
        'grow-shrink': 'grow-shrink 1s ease-in-out infinite'
      },
      keyframes: {
        'blink-shadow': {
          '0%, 100%': { textShadow: '0 0 0 rgba(255, 250, 230, 0)' },
          '50%': { textShadow: '0 0 20px rgb(255, 250, 230)' },
        },
        'blink-shadow-button': {
          '0%': { 'box-shadow': '0 0 0 rgba(255, 250, 230, 0)' },
          '50%': { 'box-shadow': '0 0 20px rgb(255, 250, 230)' },
          '100%': { 'box-shadow': '0 0 0 rgba(255, 250, 230, 0)' },
        },
        'grow-shrink': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      borderColor: {
        borderGray: "rgb(174, 177, 149)"
      },
      backgroundColor: {
        orange: "rgb(255, 159, 102)",
        activeColor: "#e2e4d3"
      },
    },
  },
  plugins: [],
}

