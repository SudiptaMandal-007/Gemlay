/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gemGreen: '#0b6353',
        gemGreenDark: '#064134',
        gemLight: '#f8fffb',
      },
      boxShadow: {
        card: '0 18px 40px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
