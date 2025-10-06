/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',      // Extra small devices
        'sm': '640px',      // Small devices
        'md': '768px',      // Medium devices
        'lg': '1024px',     // Large devices
        'xl': '1280px',     // Extra large devices
        '2xl': '1536px',    // 2X large devices
      },
      spacing: {
        '18': '4.5rem',     // 72px - custom spacing for navbar
        '22': '5.5rem',     // 88px
      },
      maxWidth: {
        '8xl': '88rem',     // Custom max width
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}