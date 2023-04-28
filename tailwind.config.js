/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slider: { //무한슬라이더
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(-300px)',
          },
        },
        },
      animation: {
        slider: 'slider 5s linear infinite',
      },
      
    }, //여기까지
  },
  plugins: [],
};
