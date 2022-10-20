/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': 'var(--light-blue)',
        'dark-blue': 'var(--dark-blue)',
        'light-purple': 'var(--light-purple)',
        'pink': 'var(--light-pink)'
      }
    },
  },
  plugins: [],
}