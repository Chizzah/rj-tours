// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
    variants: {
      /* If you are using Collapse component*/
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      opacity: ["disabled"],
      textColor: ["active"],
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
