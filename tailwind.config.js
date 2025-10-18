/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small devices (phones)
        sm: "640px", // Small devices (tablets)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra large devices (desktops)
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
