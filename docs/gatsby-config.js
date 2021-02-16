module.exports = {
  siteMetadata: {
    siteTitle: `Athenic UI Documentation`,
    defaultTitle: `Athenic UI`,
    siteTitleShort: `Athenic UI`,
    siteDescription: `👑 Athenic UI React component library. Building beautiful React applications made simple!`,
    siteUrl: `https://docs.athenic.at`,
    siteAuthor: `@b3h3m0th`,
    siteImage: `./static/logo.png`,
    siteLanguage: `en`,
    themeColor: `#a50f00`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#fffcf9`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
