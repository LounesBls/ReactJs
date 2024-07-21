/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
          'body_clr': '#0A071A',
          'primary_clr':  '#F5B70A',
          'secondary_clr': '#141124',
          'btn_clr': '#F76E11',
          'p_clr': '#C4C4C4',
          'services_clr': '#7865FF #FF766B #F5B70A #2ACE92'
      },
      boxShadow: {
        'shadow': '6px 6px 8px -3px #f76e11',
      }
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
}