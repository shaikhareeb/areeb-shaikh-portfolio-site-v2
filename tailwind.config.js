module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				inconsolata: ["Inconsolata", "monospace"],
				karla: ["Karla", "sans-serif"],
			},
			margin: {
				"30px": "30px",
			},
			padding: {
				"30px": "30px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
