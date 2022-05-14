module.exports = {
  siteMetadata: {
    title: 'cloudhub-ux',
    description: 'Components to help you build your next reactjs app.',
    author: '@cloudhubke',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/components/home-layout.js'),
          docs: require.resolve('./src/components/docs-layout.js'),
        },
        extensions: ['.md', '.mdx'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/docs`,
        name: 'docs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/cloudhubicon256.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
