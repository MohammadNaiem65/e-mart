/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '#FF7143',
                dark: '#808080',
                light: '#F4F4F4',
                stroke: '#D9D9D9',
                cardStroke: '#979797',
            },
            textColor: {
                primary: '#403F3F',
                dark: '#252525',
            },
            fontFamily: {
                geist: 'var(--font-geist-sans)',
                'geist-mono': 'var(--font-geist-mono)',
                inter: 'var(--font-inter)',
            },
        },
    },
    plugins: [],
};
