/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Broadcast brand system — semantic tokens over ad-hoc utility colors.
        ink: {
          DEFAULT: '#07080a', // deep broadcast black (warm-neutral)
          soft: '#0d0f13',
          panel: '#101318',
          line: '#1c2129',
        },
        signal: {
          // primary — phosphor cyan
          DEFAULT: '#2ee6d6',
          bright: '#5ff5e8',
          dim: '#178f86',
        },
        magenta: {
          // secondary — CRT magenta
          DEFAULT: '#ff4fa3',
          bright: '#ff7cbd',
          dim: '#b3306f',
        },
        amber: {
          // "on air" / warning
          DEFAULT: '#ffb020',
          dim: '#a6710f',
        },
        phosphor: '#48e06a', // status green
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'system-ui', 'monospace'],
        heading: ['"Space Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(46,230,214,0.06), 0 20px 60px -20px rgba(0,0,0,0.9)',
        glow: '0 0 24px -4px rgba(46,230,214,0.45)',
        'glow-magenta': '0 0 24px -4px rgba(255,79,163,0.45)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(46,230,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(46,230,214,0.04) 1px, transparent 1px)',
        scanlines:
          'repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0) 4px)',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.72' },
          '94%': { opacity: '1' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0.35' },
        },
      },
      animation: {
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 6s linear infinite',
        blink: 'blink 1.4s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
