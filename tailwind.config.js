/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./src/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
});

