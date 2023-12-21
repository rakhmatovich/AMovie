/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
            '500px' : '500px',
            '1000px' : '1000px',
      },
      colors: {
        about: "#6c757d",
      },
      fontFamily: {
        PlayFair: ["Playfair Display", "serif"],
        PlayFairDisplay: ['Playfair Display', 'serif'],
        Price: ['Arimo','serif']
      },
    },
  },
  plugins: [],
};
