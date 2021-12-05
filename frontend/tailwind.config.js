module.exports = {
	purge: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
	  extend: {
		width: {
			100: '30rem',
		  },
	  },
	},
	variants: {
	  extend: {},
	},
	plugins: [],
}