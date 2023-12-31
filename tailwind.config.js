/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage:{
        "right-img": "url('../src/Images/tr.jpg')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  plugins: [require("daisyui")],
}