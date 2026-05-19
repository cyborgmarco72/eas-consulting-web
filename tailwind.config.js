/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        easBlue: '#005596', // El azul corporativo típico de SAP/EAS
      },
    },
  },
  plugins: [],
}
