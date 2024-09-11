/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/*.pug"],
  mode: "jiit",
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
