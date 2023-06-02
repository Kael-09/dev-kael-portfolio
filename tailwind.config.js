/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        phpShadow: "hsl(228, 40%, 35%)",
        pythonShadow: "hsl(207,51%,44%)",
        gitShadow: "hsl(8,72%,54%)",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
