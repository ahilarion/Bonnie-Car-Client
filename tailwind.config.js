/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    colors: {
      'bc-black': '#19181D',
      'bc-yellow': '#FFD719',
      'bc-white': '#EFEFEE',
      'bc-gray-dark': '29282D',
      'bc-gray': '#37363B',
      'bc-gray-light': '#7F7F7F',
      'bc-gray-hover': 'rgb(59,51,51)',
      'bc-gray-active': 'rgb(59,51,51)',
      'bc-black-opacity': 'rgba(24, 25, 29, 0.8)',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
      require("@tailwindcss/forms"),
      require("preline/plugin"),
  ],
}

