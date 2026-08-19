/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFF0F5',
          soft: '#FFE4E9',
          rose: '#FF8DA1',
          hot: '#FF4D6D',
          cream: '#FFFDF9',
          yellow: '#FFF3B0',
          lavender: '#F3E8FF',
          peach: '#FFE5D9',
          mint: '#E8F5E9',
        },
        cute: {
          text: '#4A2835',
          subtext: '#85586F',
          border: '#FFCCD5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        cute: ['Caveat', 'Dancing Script', 'cursive'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounceSlow 2.5s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float-cute': 'floatCute 4s ease-in-out infinite',
        'float-cute-2': 'floatCute2 5s ease-in-out infinite',
        'pulse-heart': 'pulseHeart 1.4s ease-in-out infinite',
        'spin-cute': 'spin 10s linear infinite',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        floatCute: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatCute2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        pulseHeart: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      boxShadow: {
        'cute': '0 8px 25px -4px rgba(255, 77, 109, 0.2), 0 0 0 2px rgba(255, 204, 213, 0.6)',
        'cute-hover': '0 14px 30px -4px rgba(255, 77, 109, 0.3), 0 0 0 3px #FF8DA1',
        'polaroid-cute': '0 12px 28px -6px rgba(133, 88, 111, 0.18), 0 0 0 1px rgba(255, 141, 161, 0.2)',
      }
    },
  },
  plugins: [],
}
