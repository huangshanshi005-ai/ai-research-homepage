/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#102033',
        muted: '#5f6f85',
        line: '#dce5ef',
        porcelain: '#f7fbff',
        cyan: '#20a4b8',
        navy: '#163b65',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(22, 59, 101, 0.10)',
      },
    },
  },
  plugins: [],
};
