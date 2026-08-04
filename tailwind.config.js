/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#09090B',
        'bg-card': '#18181B',
        'bg-card-hover': '#1F1F23',
        'text-primary': '#F4F4F5',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        'border-subtle': '#27272A',
        'accent-gold': '#F59E0B',
        'accent-warm': '#E2C08D',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Iowan Old Style', 'Baskerville', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
