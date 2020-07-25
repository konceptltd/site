const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/bg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `engineering`,
        path: `${__dirname}/src/assets/engineering`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `software`,
        path: `${__dirname}/src/assets/software`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `agriculture`,
        path: `${__dirname}/src/assets/agriculture`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
};
