/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        babysteps: {
          blue: '#609EF5',
          softBlue: '#BADAFF',
          lavender: '#D6C7FF',
          yellow: '#FFF78A',
          accentYellow: '#FDE63F',
          mint: '#D8F8E8',
          cream: '#FFF9F2',
        }
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
  }}