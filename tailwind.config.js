// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #333333 0%, #D27927 100%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        bounce: "bounce 1s infinite",
        'fade-scale': 'fadeScale 2s infinite',
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
        fadeScale: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(0.95)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
