/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm : '20px',
    },

    colors: {
      'navBarBackgroundColor': '#F7F9FF',
      'navBarTextColor': '#6BC1B5',
      'contentBodyBlueColor': '#108CFF',
    },

    extend: {},
  },
  plugins: [],
}
