/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e6ebff",
          200: "#c3cfff",
          300: "#95abff",
          400: "#637eff",
          500: "#3551ff",
          600: "#253ad9",
          700: "#1a2aa8",
          800: "#121e79",
          900: "#0a124d"
        }
      },
      boxShadow: {
        glow: "0 20px 45px rgba(53, 81, 255, 0.35)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
