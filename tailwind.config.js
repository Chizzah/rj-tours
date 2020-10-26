// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: ["./src/**/*.js"],
	theme: {
		extend: {
			spacing: {
				72: "18rem",
				84: "21rem",
				96: "24rem",
			},
		},
	},
	variants: {},
	// https://github.com/tailwindcss/custom-forms
	plugins: [require("@tailwindcss/custom-forms")],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
