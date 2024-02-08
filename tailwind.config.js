/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    colors: {
      'bc-black': '#000000',
      'bc-yellow': '#ffd719',
      'bc-white': '#ffffff',
      'bc-gray': '#262121',
      'bc-gray-hover': 'rgb(59,51,51)',
      'bc-gray-active': 'rgb(59,51,51)',
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
      require("preline/plugin")
  ],
}

