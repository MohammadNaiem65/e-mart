/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
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
    			cardStroke: '#979797'
    		},
    		textColor: {
    			primary: '#403F3F',
    			highlight: '#FF7143',
    			dark: '#252525',
    			mute: '#808080'
    		},
    		fontFamily: {
    			geist: 'var(--font-geist-sans)',
    			'geist-mono': 'var(--font-geist-mono)',
    			inter: 'var(--font-inter)'
    		},
    		animation: {
    			marquee: 'marquee var(--marquee-duration, 60s) linear infinite'
    		},
    		keyframes: {
    			marquee: {
    				'0%': {
    					transform: 'translateX(0)'
    				},
    				'100%': {
    					transform: 'translateX(calc(-50% - var(--marquee-gap, 50px)))'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
