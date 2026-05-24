/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      colors: {
        easBlue: '#005596', // Tu azul base inicial
        easNavy: '#103268', // Azul Oscuro Oficial de EAS
        easLightBlue: '#00BEFE', // Azul Eléctrico de EAS
        easGreen: '#76BC21', // Verde Corporativo de EAS
      },
      fontFamily: {
        exo: ["var(--font-exo)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
}