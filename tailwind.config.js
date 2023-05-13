module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
			fontSize: {
				zero: 0,
			},
		},
	},
	plugins: [],
};
