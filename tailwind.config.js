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
      animation: {
        /* If you are using Toast component*/
        left: "left 0.3s",
        /* If you are using Toast component*/
        right: "right 0.3s",
        /* If you are using Modal position right*/
        "modal-right": "modal-right 0.3s",
        /* If you are using Modal position top*/
        "modal-top": "modal-top 0.3s",
        /* If you are using Modal position left*/
        "modal-left": "modal-left 0.3s",
      },
      keyframes: {
        /* If you are using Toast component*/
        left: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        right: {
          "0%, 100%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        /* If you are using Modal position top*/
        "modal-top": {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },
        /* If you are using Modal position right*/
        "modal-right": {
          "0%, 100%": { right: "-500px" },
          "100%": { right: "0" },
        },
        /* If you are using Modal position left*/
        "modal-left": {
          "0%, 100%": { left: "-500px" },
          "100%": { left: "0" },
        },
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

  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
