/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/styles/*.css}', './src/views/*.pug'],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
