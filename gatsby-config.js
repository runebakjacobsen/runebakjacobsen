module.exports = {
  siteMetadata: {
    title: `Rune Bak Jacobsen`,
    description: ``,
    author: `@runebakjacobsen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-polished`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://runebakjacobsen.us4.list-manage.com/subscribe/post?u=63d4e6315ddc892e6bf78bc5e&amp;id=a94a334fab",
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://185918ed8b8f46a8911871b478f8973d@sentry.io/1878385",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        // environment: process.env.NODE_ENV,
        // enabled: (() =>
        //   ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
