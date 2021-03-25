import * as React from "react"
import { graphql } from 'gatsby'
import ProductGrid from "../components/ProductGrid";
import Home from "../components/Home";

const IndexPage = ({data}) => {
  return (
    <>
      <Home title={data.site.siteMetadata.title} />
      <ProductGrid />
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
