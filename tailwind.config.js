/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        consolas: ['Inconsolata', 'sans-serif'],
      },
      colors: {
        primary: '#292929',
      },
    },
  },
  plugins: [],
}

