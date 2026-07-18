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
          raised: '#141922',
          line: '#1f2530',
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
      letterSpacing: {
        chyron: '0.35em',
        signal: '0.5em',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 24px 60px -30px rgba(0,0,0,0.95)',
        glow: '0 0 0 1px rgba(46,230,214,0.35), 0 18px 40px -18px rgba(46,230,214,0.30)',
        'glow-magenta': '0 0 0 1px rgba(255,79,163,0.35), 0 18px 40px -18px rgba(255,79,163,0.30)',
        'glow-sm': '0 0 20px -6px rgba(46,230,214,0.45)',
      },
      backgroundImage: {
        // SMPTE broadcast test-signal bars — the site's signature motif.
        bars:
          'linear-gradient(90deg,#c9ced6 0 14.285%,#ffb020 14.285% 28.57%,#2ee6d6 28.57% 42.855%,' +
          '#48e06a 42.855% 57.14%,#ff4fa3 57.14% 71.425%,#ef4444 71.425% 85.71%,#3b82f6 85.71% 100%)',
        'grid-faint':
          'linear-gradient(rgba(46,230,214,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(46,230,214,0.05) 1px, transparent 1px)',
        scanlines:
          'repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.16) 3px, rgba(0,0,0,0) 4px)',
        // CRT edge vignette
        vignette:
          'radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(0,0,0,0.45) 100%)',
        // Fine film grain (self-contained SVG turbulence)
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
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
          '97%': { opacity: '0.88' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0.35' },
        },
        'grain-shift': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(-4%,3%)' },
          '40%': { transform: 'translate(3%,-5%)' },
          '60%': { transform: 'translate(-3%,4%)' },
          '80%': { transform: 'translate(4%,-2%)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scanline: 'scanline 8s linear infinite',
        flicker: 'flicker 7s linear infinite',
        blink: 'blink 1.4s steps(1) infinite',
        grain: 'grain-shift 6s steps(4) infinite',
        ticker: 'ticker 42s linear infinite',
      },
    },
  },
  plugins: [],
};
