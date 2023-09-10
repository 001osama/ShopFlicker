/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#f95c3c',
        'main-orange-hover': '#bf4830',
        'dark-gray': '#43484c',
        'dark-gray-hover': '#2d3033',
        'medium-gray': '#979fa7',
        'medium-gray-hover': '#747a80',
        'offwhite-hover': '#cccecf',
        'offwhite': '#fafbfc'
      },
      fontFamily: {
        opensans: ['Open Sans'],
        poppins: ['Poppins']
      }
    }
  },
  plugins: [],
}

