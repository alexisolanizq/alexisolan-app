/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        meshOne: {
          "70%": { transform: "scale(1.2) translateX(60px) translateY(50px)" },
        },
        meshTwo: {
          "70%": { transform: "scale(1) translateX(-80px)" },
        },
        meshThree: {
          "70%": { transform: "scale(1.1)" },
        },
        meshFour: {
          "70%": { transform: "scale(1.3) translateX(-50px)" },
        },
      },
      animation: {
        meshOne: "meshOne 4s ease-in-out infinite",
        meshTwo: "meshTwo 3s ease-in-out infinite",
        meshThree: "meshThree 2s ease-in-out infinite",
        meshFour: "meshFour 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
