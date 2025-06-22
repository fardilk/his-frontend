/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{js,ts,jsx,tsx, css}', // ini cover semua file di src, termasuk components + pages
] ,
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};



