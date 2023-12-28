/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      fontFamily: {
      'times': ['Times New Roman', 'serif']
    },
    colors: {
      'primary-purple': '#9191FF'
    }
  },
  },
  plugins: [],
}

