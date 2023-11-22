import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			height: {
				screen: '100dvh',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			layout: {
				radius: {
					small: '2px', // rounded-small
					medium: '4px', // rounded-medium
					large: '6px', // rounded-large
				},
			},
			themes: {
				light: {
					colors: {
						foreground: '#010e0b',
						background: '#ffffff',
						primary: '#000000',
						secondary: '#d9d9d9',
					},
				},
			},
		}),
	],
};
export default config;
