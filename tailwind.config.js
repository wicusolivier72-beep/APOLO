/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0C0E',
        'bg-card': '#13151A',
        'bg-card-hover': '#181A20',
        'text-primary': '#F3F4F6',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
        'border-subtle': '#222630',
        'accent-gold': '#D4AF37',
        'accent-warm': '#E2C08D',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'], // Replacing blocky monospace with clean Inter for code/tags
      },
    },
  },
  plugins: [],
}
