/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
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
      'fOne': "url('/src/assets/f1.png')",
      'fTwo': "url('/src/assets/f2.png')",
      'fThree': "url('/src/assets/f3.png')",
      'loginBg': "url('/src/assets/loginBg.svg')",
      'registerBg': "url('/src/assets/registerBg.svg')",
      'updatebg': "url('/src/assets/updatebg.png')",
      'newsLetter': "url('/src/assets/newsLetter/newsLetter.png')",
    }
    },
  },
  plugins: [
    daisyui,
    flowbite.plugin(),
  ],
}