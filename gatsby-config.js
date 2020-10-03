module.exports = {
  pathPrefix: `~huangs/`,
  siteMetadata: {
    title: `PGDP blog`,
    author: {
      name: `Simon Huang`,
    },
    description: `Blog for PGDP Tutorium WS 2020`,
    siteUrl: `https://home.in.tum.de/~huangs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    //   {
    //     resolve: `gatsby-plugin-google-analytics`,
    //     options: {
    //       //trackingId: `ADD YOUR TRACKING ID HERE`,
    //     },
    //   },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `simonhng`,
        short_name: `simonhng`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `fullscreen`,
        icon: `content/assets/simomns.svg`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-svg`,
  ],
}
