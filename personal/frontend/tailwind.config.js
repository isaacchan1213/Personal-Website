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
    },
  },
  plugins: [],
}

