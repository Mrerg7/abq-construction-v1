/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f5f6f7',
          100: '#e6e8eb',
          200: '#cfd3d8',
          300: '#adb4bc',
          400: '#848d98',
          500: '#69727d',
          600: '#596068',
          700: '#4a5056',
          800: '#40454a',
          900: '#383c40',
          950: '#1f2225',
        },
        rust: {
          50: '#fbf6f1',
          100: '#f4e7d8',
          200: '#e8ccb0',
          300: '#d9aa7e',
          400: '#c98854',
          500: '#bb7040',
          600: '#a35934',
          700: '#87452d',
          800: '#6f3a2a',
          900: '#5c3226',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
