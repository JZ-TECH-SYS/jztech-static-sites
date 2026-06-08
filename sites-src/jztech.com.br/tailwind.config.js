/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: '#3a00ff',
        dark: '#000000',
        light: '#ffffff',
        accent: '#121212',
      },
    },
  },
  plugins: [],
}
