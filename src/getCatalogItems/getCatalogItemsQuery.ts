import gql from 'graphql-tag';

export default gql`
query catalogItems($shopId: ID!, $tagIds: [ID], $offset: Int, $first: ConnectionLimitInt, $last:  ConnectionLimitInt, $before: ConnectionCursor, $after: ConnectionCursor, $sortBy: CatalogItemSortByField, $sortByPriceCurrencyCode: String, $sortOrder: SortOrder) {
    catalogItems(shopIds: [$shopId], tagIds: $tagIds, offset: $offset, first: $first, last: $last, before: $before, after: $after, sortBy: $sortBy, sortByPriceCurrencyCode: $sortByPriceCurrencyCode, sortOrder: $sortOrder) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          _id
          ... on CatalogItemProduct {
            product {
              _id
              productId
              pageTitle
              slug
              sku
              description
              vendor
              isVisible
              isLowQuantity
              isSoldOut
              isBackorder
              minOrderQuantity
              originCountry
              productType
              width
              weight
              height
              supportedFulfillmentTypes
              metafields {
                description
                key
                namespace
                scope
                value
                valueType
              }
              shop {
                currency {
                  code
                }
              }
              pricing {
                compareAtPrice {
                  displayAmount
                }
                currency {
                  code
                }
                displayPrice
                minPrice
                maxPrice
              }
              primaryImage {
                URLs {
                  thumbnail
                  small
                  medium
                  large
                }
              }
            }
          }
        }
      }
    }
  }  
`;
