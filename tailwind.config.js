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
      'primary-purple': '#9191FF',
      'dark-blue': '#000F26',
      'light-blue': '#B4DBFF'
    },
    animation: {
      'float': 'float 2s infinite',
    }
  },
  },
  plugins: [],
}

