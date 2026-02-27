/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'glass-bg': 'rgba(10, 10, 15, 0.8)',
        'neon-violet': '#8b5cf6',
        'neon-cyan': '#06b6d4',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
