/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F1F3F2',
        card: '#FFFFFF',
        ink: '#171B1D',
        inkdim: '#5B6669',
        line: '#DBE1DF',
        accent: '#2D5F8A',
        green: '#4F8A6E',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
