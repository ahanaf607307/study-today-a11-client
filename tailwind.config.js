/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily : {
      cardFont: "Finlandica",
     },
     backgroundImage: {
      'pendingBg': "url('/src/assets/pendingBg.png')",
      'bannerBg': "url('/src/assets/banner.png')",
      'assignmentBg': "url('/src/assets/assignmentBg.png')",
    }
    },
  },
  plugins: [
    daisyui,
  ],
}