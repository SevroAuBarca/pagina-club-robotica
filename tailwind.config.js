/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/fotoInicio.webp')",
        img1: "url('/src/assets/robotica-educativa-que-es.jpg')",
        img2: "url('/src/assets/imagen-prueba1.jpg')",
        img3: "url('/src/assets/imagen-prueba2.webp')",
        img4: "url('/src/assets/imagen-prueba3.jpg')",
        qr: "url('/src/assets/qrCode.png')",
        fbm: "url('/src/assets/facebook.png')",
        fbd: "url('/src/assets/facebook-desktop.png')",
        igm: "url('/src/assets/instagram.png')",
        igd: "url('/src/assets/instagram-desktop.png')",
        gmlm: "url('/src/assets/gmail.png')",
        gmld: "url('/src/assets/gmail-desktop.png')",
      },
    },
  },
  plugins: [],
};
