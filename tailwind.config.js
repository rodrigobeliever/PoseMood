export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0d0d0d',
          lighter: '#1a1a1a',
          card: '#1c1c1c',
        },
        neon: {
          blue: '#00bcd4',
          hover: '#00acc1',
        },
        light: {
          gray: '#e0e0e0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 188, 212, 0.1), 0 2px 4px -1px rgba(0, 188, 212, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 188, 212, 0.2), 0 4px 6px -2px rgba(0, 188, 212, 0.1)',
      }
    },
  },
  plugins: [],
}
