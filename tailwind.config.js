/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f9fafb",
        "blue-500": "#3b82f6",
        white: "#fff",
        "colors-gray-200": "#c1c7d0",
        "colors-gray-300": "#a4acb9"
      },

    }
  }
}
