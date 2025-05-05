/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },

			},
			animation: {
				"fade-in-scale": "fade-in-scale 0.3s ease-out forwards",
				"fade-out-scale": "fade-out-scale 0.2s ease-in forwards",
				'fade-in': 'fadeIn 0.3s ease-out forwards',
			},
		},
	},
	plugins: [],
};
