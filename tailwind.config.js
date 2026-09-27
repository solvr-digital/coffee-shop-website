/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#0B0806',
          900: '#140F0B',
          850: '#1A1410',
          800: '#231B15',
          700: '#342921',
          600: '#4D3E33',
          500: '#685547',
          400: '#8A7362',
        },
        cream: {
          50: '#FCFAF7',
          100: '#F8F4ED',
          200: '#F2ECE1',
          300: '#E7DDD0',
          400: '#D5C7B5',
        },
        sand: {
          100: '#EFEAE1',
          200: '#E4DDD0',
          300: '#D3C8B7',
        },
        gold: {
          300: '#E6CFAB',
          400: '#D9BC8E',
          500: '#C5A880',
          600: '#A88B60',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 15, 11, 0.08)',
        'luxury-lg': '0 30px 60px -20px rgba(20, 15, 11, 0.15)',
        'glow-gold': '0 0 35px rgba(197, 168, 128, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
