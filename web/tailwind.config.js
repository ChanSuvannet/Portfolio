/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-600': {'max': '600px'},
        'max-980': {'min': '601px', 'max': '980px'},
      },
      colors: {
        'cyber': {
          50:  '#e0f8ff',
          100: '#b3efff',
          200: '#80e4ff',
          300: '#4dd9ff',
          400: '#26d0ff',
          500: '#06b6d4',  // primary cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#0a0f1e',  // deep dark
        },
        'neon': {
          purple: '#8b5cf6',
          cyan:   '#06b6d4',
          blue:   '#3b82f6',
          pink:   '#ec4899',
          green:  '#10b981',
        },
        'dark': {
          900: '#0a0a0f',
          800: '#0d0d1a',
          700: '#111128',
          600: '#161630',
          500: '#1a1a3e',
          card: 'rgba(13,13,26,0.8)',
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)
        `,
        'glow-cyan':   'radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.2) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'neon-border':  'linear-gradient(135deg, #06b6d4, #8b5cf6, #3b82f6)',
      },
      boxShadow: {
        'neon-cyan':   '0 0 20px rgba(6,182,212,0.4), 0 0 60px rgba(6,182,212,0.1)',
        'neon-purple': '0 0 20px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.1)',
        'neon-blue':   '0 0 20px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.1)',
        'glass':       '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover':  '0 20px 60px rgba(6,182,212,0.15), 0 8px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'glow-pulse':   'glow-pulse 3s ease-in-out infinite',
        'scan-line':    'scan-line 4s linear infinite',
        'border-flow':  'border-flow 3s linear infinite',
        'fade-up':      'fade-up 0.6s ease-out forwards',
        'spin-slow':    'spin 8s linear infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'typing':       'typing 3.5s steps(40) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(8px)' },
          '50%':      { opacity: '1',   filter: 'blur(12px)' },
        },
        'scan-line': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'border-flow': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
