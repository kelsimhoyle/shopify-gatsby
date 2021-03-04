import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import StoreContext from "../../context/StoreContext";
import { Grid, Product, Title, PriceTag } from "./styles"
import { Img } from "../../utils/styles"
import { getImage } from "gatsby-plugin-image"


const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`{
  allShopifyProduct(sort: {fields: [createdAt], order: DESC}) {
    edges {
      node {
        id
        title
        handle
        createdAt
        images {
          id
          originalSrc
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
                )
            }
          }
        }
        variants {
          price
        }
      }
    }
  }
}
`
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : "EUR",
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              images,
              variants: [firstVariant]
            },
          }) => (
            <Product key={id}>
              <Link to={`/products/${handle}/`}>
                {images ? (
                  <Img
                    image={getImage(images[0].localFile)}
                    alt={handle}
                  />
                ) : null}
              </Link>
              <Title>{title}</Title>
              <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
            </Product>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Grid>
  );
}

export default ProductGrid
