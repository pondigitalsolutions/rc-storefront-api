import gql from "graphql-tag";

export default gql`
  query CatalogItemProductQuery($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        _id
        productId
        productType
        sku
        slug
        pageTitle
        description
        isVisible
        isDeleted
        originCountry
        title
        vendor
        tagIds
        height
        length
        weight
        isSoldOut
        isLowQuantity
        minOrderQuantity
        isBackorder
        pricing {
          currency {
            code
          }
          minPrice
          maxPrice
          displayPrice
        }
        metafields {
          key
          value
          description
          valueType
        }
        variants {
          _id
          optionTitle
          title
          sku
          attributeLabel
          index
          variantId
          isSoldOut
          isBackorder
          inventoryInStock
          minOrderQuantity
          inventoryAvailableToSell
          pricing {
            currency {
              code
            }
            price
            displayPrice
          }
          taxCode
        }
      }
    }
  }
`;
