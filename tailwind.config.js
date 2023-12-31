/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
    },


    extend: {

      colors: {
        'tailwind-grey': '#2D3748', // gray-800
        'lighter-grey': '#5C6679',
        'light-light-blue': '#DEF2FF',
        'orange-gold': '#DBA11C',
  
      },
    },
  },
  plugins: [

    require('@tailwindcss/forms'),
  ],
}

