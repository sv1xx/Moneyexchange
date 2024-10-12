/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ProximaNova: ["ProximaNova", "sans-serif"],
      },
      backgroundImage: {
        select: "url('/src/assets/images/select.svg')",
      },
    },
  },
  plugins: [],
};
