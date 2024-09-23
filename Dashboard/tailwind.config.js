/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'top': '35px 35px 0 10px #fff',
      },
      colors: {
        'primaryClr': '#2a2185',
        'white': '#fff',
        'gray': '#f5f5f5',
        'darkBlack': '#222',
        'darkGray': '#999',
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};