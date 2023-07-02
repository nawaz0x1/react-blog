/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // other settings
  'tailwindCSS.includeLanguages': {
    javascript: 'javascript',
    html: 'HTML',
  },
};
