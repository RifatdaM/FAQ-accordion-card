/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: "Kumbh Sans, sans-serif",
      },
      colors: {
        "Very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "Soft-red": "hsl(14, 88%, 65%)",

        "Soft-violet": "hsl(273, 75%, 66%)",
        "Soft-blue": "hsl(240, 73%, 65%)",

        "Very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "Dark-grayish-blue": "hsl(240, 6%, 50%)",

        "Light-grayish-blue": "hsl(240, 5%, 91%)",
      },
    },
    container: {
      center: true,
      padding: 2,
    },
  },
  plugins: [],
};
