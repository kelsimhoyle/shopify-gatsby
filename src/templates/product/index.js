import React from "react"
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import ProductForm from '../../components/ProductForm';

import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '../../utils/styles'
import { ProductTitle, ProductDescription } from './styles'


const ProductTemplate = ({ data }) => {
  const product = data.shopifyProduct
  console.log(product.images)
  return (
    <>
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {product.images.map(image => (
              <Img
                image={getImage(image.localFile)}
                key={image.id}
                alt={product.title}
              />
            ))}
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        id
        localFile {
          childImageSharp {
            gatsbyImageData(width: 900, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      
    }
  }
`


export default ProductTemplate