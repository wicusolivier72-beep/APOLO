/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0C0C0C',
        'bg-surface': '#121212',
        'bg-surface-hover': '#1A1A1A',
        'text-primary': '#F4F4F0',
        'text-muted': '#8E8E8A',
        'border-grid': '#2A2A2A',
        'accent-gold': '#D4AF37',
        'accent-cyan': '#00E5FF',
        'accent-amber': '#FF9900',
        'accent-emerald': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
