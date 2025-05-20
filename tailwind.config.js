/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [
		"bg-fond5",
		"bg-fond3",
		"bg-fond10",
		"bg-fond2",
		"bg-fond7",
		"bg-fond8",
		"bg-fond9",
	],
	theme: {
		extend: {
			keyframes: {
				"fade-in-scale": {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				"fade-out-scale": {
					"0%": { opacity: "1", transform: "scale(1)" },
					"100%": { opacity: "0", transform: "scale(0.95)" },
				},
				fadeIn: {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
			},
			animation: {
				"fade-in-scale": "fade-in-scale 0.3s ease-out forwards",
				"fade-out-scale": "fade-out-scale 0.2s ease-in forwards",
				"fade-in": "fadeIn 0.3s ease-out forwards",
			},
			backgroundImage: {
				fond5: "url('/images/fond5.jpg')",
				fond3: "url('/images/fond3.jpg')",
				fond10: "url('/images/fond10.jpg')",
				fond2: "url('/images/fond2.jpg')",
				fond7: "url('/images/fond7.jpg')",
				fond8: "url('/images/fond8.jpg')",
				fond9: "url('/images/fond9.jpg')",
			},
		},
	},
	plugins: [],
};
