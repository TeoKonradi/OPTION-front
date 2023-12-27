/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "**/*.{ts,tsx}",
    ],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        fontFamily: {
          HandJet: ['HandJet', 'sans'],
          handJet: ['handJet', 'sans'],
        },
        colors: {
          main: '#333',
          default: '#333',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        boxShadow: {
          lg: '16px 12px 0px 0px #333',
          lg: '13px 11px 0px 0px #333',
          sm: '10px 8px 0px 0px #333',
          xs: '8px 6px 0px 0px #333',
          xxs: '4px 3px 0px 0px #333',
        },
        keyframes: {
          'accordion-down': {
            from: {
              height: 0,
            },
            to: {
              height: 'var(--radix-accordion-content-height)',
            },
          },
          'accordion-up': {
            from: {
              height: 'var(--radix-accordion-content-height)',
            },
            to: {
              height: 0,
            },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
    plugins: [
      require('tailwindcss-animate'),
      function ({ addBase, config }) {
        addBase({
          'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':
            {
              '-webkit-appearance': 'none',
              margin: '0',
            },
          'input[type="number"]': {
            '-moz-appearance': 'textfield',
          },
        });
      },
    ],
  };
  