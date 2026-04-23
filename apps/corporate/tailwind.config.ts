import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                navy: '#1e3a5f',
                accent: '#00a87a',
                'accent-light': '#e6f7f2',
                'accent-dark': '#007d5a',
                'text-sec': '#4a5568',
                'text-ter': '#8896aa',
                border: '#dde2ea',
            },
            fontFamily: {
                sans: ['var(--font-noto)', 'sans-serif'],
                outfit: ['var(--font-outfit)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config