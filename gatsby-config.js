module.exports = {
  siteMetadata: {
    title: "shopify-site",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "boutique-tailored-ex1",
        accessToken: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
