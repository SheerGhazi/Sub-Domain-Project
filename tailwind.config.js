/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannner-image': "url('./src/assets/Images/banner-bg.jpg')", // Path relative to the `public` folder
      },

      colors:{
       'orange-clr': "#ff7033",
      },
    },
  },
  plugins: [],
}

