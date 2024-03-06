import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#354E56',
        backgroundStart: '#0F2143',
        backgroundEnd: '#43572E',
      },
      backgroundImage: {
     'gradient-to-b': 'linear-gradient(to bottom, transparent, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
