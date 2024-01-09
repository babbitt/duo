/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./**/*.html",
		"./**/*.md",
	],
	theme: {
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			logo: ['Nanum Gothic Coding', 'monospace'],
		},
		extend: {},
	},
	plugins: [],
}
