/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': "#4c3398",
        'primary-brand-color': "#5d3ebc",
        'secondary-brand-color': '#7849f7',
        'brand-yellow': "#ffd300"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["before"]
    }
  },
  plugins: [],
}