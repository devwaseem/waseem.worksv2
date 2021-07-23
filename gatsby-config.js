module.exports = {
  siteMetadata: {
    siteUrl: "https://waseem.works",
    title: `Waseem | iOS App Developer`,
    description: `iOS Developer portfolio`,
    author: `@iamwaseem99`,
    email: `hello@waseem.works`,
    phone: `+918248899344`,
    social: {
      github: `https://github.com/devwaseem`,
      twitter: `https://twitter.com/iamwaseem99`,
      linkedin: `https://www.linkedin.com/in/devwaseem/`,
      instagram: `https://www.instagram.com/dvlp.er/`,
      Facebook: `https://www.facebook.com/dvlprwaseem`,
    }
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GTM-PZ99C8R",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waseem`,
        short_name: `Waseem`,
        start_url: `/`,
        icon: 'src/images/icon.png'
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
