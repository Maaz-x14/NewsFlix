/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#00040f',
				secondary: '#00f6ff',
				dimWhite: 'rgba(255, 255, 255, 0.7)',
				dimBlue: 'rgba(9, 151, 124, 0.1)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
		fontSize: {
			xs: '12px', // 12px
			sm: '14px', // 14px
			base: '16px', // 16px
			lg: '18px', // 18px
			xl: '30px', // 30px
			'2xl': '2rem', // 24px
			'3xl': '1.875rem', // 30px
			'4xl': '2.25rem', // 36px
			'5xl': '3rem', // 48px
			'6xl': '4rem', // 64px
			'7xl': '5rem', // 80px
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};

