// const resolveConfig = require("tailwindcss/resolveConfig");
// const tailwindConfig = require("./tailwind.config.js");

// const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `RJ Tours`,
    description: `Wonderful community tour experience in Oudtshoorn with RJ Tours.`,
    author: `@chaddwebdesign <info@chaddwebdesign>`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-tailwind`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: fullConfig.theme.colors.white,
    //     theme_color: fullConfig.theme.colors.teal["400"],
    //     display: `minimal-ui`,
    //     icon: `src/images/tailwind-icon.png`,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
};
