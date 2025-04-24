/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#7C3AED', // Purple
            light: '#8B5CF6',
            dark: '#6D28D9',
          },
          secondary: {
            DEFAULT: '#3B82F6', // Blue
            light: '#60A5FA',
            dark: '#2563EB',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'wave-pattern': "url('/src/assets/wave-bg.svg')",
        },
      },
    },
    plugins: [],
  }