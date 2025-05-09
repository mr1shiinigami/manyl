import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-tajawal)', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textDirection: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
    },
  },
  plugins: [
    // Add plugin to handle RTL/LTR text
    function({ addUtilities }) {
      const newUtilities = {
        '.text-direction-rtl': {
          direction: 'rtl',
          textAlign: 'right',
        },
        '.text-direction-ltr': {
          direction: 'ltr',
          textAlign: 'left',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config; 