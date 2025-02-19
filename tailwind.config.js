/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          hover: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#ffffff',
          hover: '#f0f0f0',
        }
      }
    },
  },
  plugins: [],
}