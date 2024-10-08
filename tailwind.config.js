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
        moonYellow: "#FFFAE6"
      },
      fontSize: {
        'h1': '35px'
      },
      fontWeight: {
        'bolder': '500',
      },
      screens: {
        'md': '900px',
        'xs': '350px',
      },
      animation: {
        'blink-shadow': 'blink-shadow 3s infinite',
        'blink-shadow-button': 'blink-shadow-button 1s infinite',
        'grow-shrink': 'grow-shrink 1s ease-in-out infinite',
        'up-down': 'up-down 3s ease-in-out infinite',
        'fade-down': 'fade-down 1s',
        'fade-up': 'fade-up 2s'
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
        },
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-down': {
          '0%': {transform:'translateY(-30px)', opacity: '0'},
          '100%': {transform:'translateY(0px)', opacity: '1'}
        },
        'fade-up': {
          '0%': {transform:'translateY(30px)', opacity: '0'},
          '100%': {transform:'translateY(0px)', opacity: '1'}
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

