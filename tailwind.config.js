// tailwind.config.js
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          lato: ['var(--font-lato)', 'sans-serif'],
          tajawal: ['var(--font-tajawal)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };