/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}","./index.html"],
  theme: {
    extend: {
      animation: {
        "slide-in-bck-bottom":
          "slide-in-bck-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-in-bck-bottom": {
          "0%": {
            transform: "translateZ(700px) translateY(300px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};