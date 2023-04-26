/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    },
    colors: {
      SoftBlue: 'hsl(231, 69%, 60%)',
      SoftRed: 'hsl(0, 94%, 66%)',
      GrayishBlue: 'hsl(229, 8%, 60%)',
      VeryDarkBlue: 'hsl(229, 31%, 21%)',
      White: 'hsl(0, 0%, 100%)',
      LimeGreen: 'hsla(129, 92%, 37%, 1)'
    }
  },
  plugins: [],
}

