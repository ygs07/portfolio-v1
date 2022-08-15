/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'gold': '#EFC69B',
      'burgandry': '#AF1B3F',
      'black': '#000000',
      'smoky-black': '#0F0F0F',
      'rich-black': '#0E131F',
      'off-white' : '#E6E6E6',
      fontFamily: {
         'body': ["Poppins"]
       },
    },
    extend: {},
  },
  plugins: [],
}
