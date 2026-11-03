/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0C0E',
        surface: {
          DEFAULT: '#121418',
          muted: '#181B20',
          elevated: '#1E2229',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
        accent: {
          DEFAULT: '#E11D48',
          hover: '#F43F5E',
          muted: 'rgba(225, 29, 72, 0.14)',
          amber: '#F59E0B',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '1rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.06)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
