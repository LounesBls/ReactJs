/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'selector',

  theme: {
    colors: {
      dark: {
        'nav': '#0c123d',
        'primaryClr': '#379cf6',
        'headings-linksClr': '#fff',
        'btnPrimaryBg-linkActiveClr': '#379cf6',
        'btnSecondaryBg': '#090238',
        'teamCardBg': '#1b2352',
        'paragraphs': '#f3efefab',

        // Card Background Color: =>  45deg 
          'cardBgOne': '#0f123d',
          'cardBgTwo': '#0f2945',
          'cardBgThree': '#0b2945',

        // Counter Gradient Colors: => 90deg
        'counterClrOne': '#118fae',
        'counterClrTwo': '#1d81b0',
        'counterClrThree': '#235dad',

        newsLetterBg : {
          'nLetClrOne': '#1b0973',
          'nLetClrTwo': '#1d0960',
          'nLetClrThree': '#0e0938',
        }, /* 90deg */
        'testImonialBg': '#1a0f4f',
        'bodyBg':'linear-gradient(90deg, rgba(5, 2, 45, 1) 22%, rgba(5, 6, 36, 1) 40%, rgba(6, 11, 26, 1) 100%)',
      },
      
      light: {
        'nav': '#f7f7f7',
        'liBody-bg': '#fff',
        'primary-countSectBg-btnPrimaryClr': '#816aff',
        'headingColor': '#0c123d',
        'counterClr': '#fff',
        // newsLetterBg
        'newsLetterBgOne': '#bdf3ff',
        'newsLetterBgTwo': '#c1f3ff',
        'newsLetterBgThree': '#fffaff',
      },
    },

    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },

    screens: {
      'xsm': '400px',
      // =>  @media (min-width: 640px) { ... }

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
    },

    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bodyColor': {
            background: 'linear-gradient(90deg, rgba(5, 2, 45, 1) 22%, rgba(5, 6, 36, 1) 40%, rgba(6, 11, 26, 1) 100%)',
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
