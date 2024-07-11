/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./*.html"],
  theme: {
    extend: {
      animation: {
        "slide-in-bck-bottom":
          "slide-in-bck-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-bck-left":
          "slide-in-bck-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
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
        "slide-in-bck-left": {
          "0%": {
            transform: "translateZ(700px) translateX(-400px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateX(0)",
            opacity: "1",
          },
        },
      },
      fontFamily: {
        keifont: ["keifont"],
      },
      animationDelay: {
        1600: "1600ms",
        1700: "1700ms",
        1800: "1800ms",
        1900: "1900ms",
        2100: "2100ms",
        2200: "2200ms",
        2300: "2300ms",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
