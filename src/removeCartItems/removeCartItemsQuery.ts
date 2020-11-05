import gql from "graphql-tag";

export default gql`
  mutation RemoveCartItemsQuery($input: RemoveCartItemsInput!) {
    removeCartItems(input: $input) {
      cart {
        _id
        account {
          _id
        }
        checkout {
          flatRateFulfillmentMethods {
            _id
            label
            name
            rate
            isEnabled
            fulfillmentTypes
            group
            cost
            handling
          }
          fulfillmentGroups {
            _id
            availableFulfillmentOptions {
              fulfillmentMethod {
                _id
                displayName
                name
              }
              handlingPrice {
                amount
                currency {
                  code
                }
                displayAmount
              }
              price {
                amount
                currency {
                  code
                }
                displayAmount
              }
            }
            items {
              _id
              optionTitle
              productConfiguration {
                productId
                productVariantId
              }
            }
            data {
              shippingAddress {
                firstName
                lastName
              }
            }
            selectedFulfillmentOption {
              fulfillmentMethod {
                _id
                displayName
                name
              }
              handlingPrice {
                amount
                currency {
                  code
                }
                displayAmount
              }
              price {
                amount
                currency {
                  code
                }
                displayAmount
              }
            }
            type
          }
          summary {
            total {
              amount
              currency {
                code
              }
              displayAmount
            }
            itemTotal {
              amount
              currency {
                code
              }
              displayAmount
            }
            discountTotal {
              amount
              currency {
                code
              }
              displayAmount
            }
            fulfillmentTotal {
              amount
              currency {
                code
              }
              displayAmount
            }
            taxTotal {
              amount
              currency {
                code
              }
              displayAmount
            }
            handlingTotal {
              amount
              currency {
                code
              }
              displayAmount
            }
            shippingTotal {
              amount
              currency {
                code
              }
              displayAmount
            }
          }
        }
        createdAt
        expiresAt
        email
        referenceId
        shop {
          _id
        }
        updatedAt
        taxSummary {
          taxableAmount {
            amount
            currency {
              code
            }
            displayAmount
          }
        }
        surcharges {
          _id
          amount {
            amount
            currency {
              code
            }
            displayAmount
          }
        }
        items {
          nodes {
            _id
            addedAt
            createdAt
            updatedAt
            title
            variantTitle
            optionTitle
            productSlug
            quantity
            productConfiguration {
              productId
              productVariantId
            }
            inventoryAvailableToSell
            metafields {
              key
              value
              description
            }
            tax {
              amount
              currency {
                code
              }
              displayAmount
            }
            price {
              amount
              currency {
                code
              }
              displayAmount
            }
            priceWhenAdded {
              amount
              currency {
                code
              }
              displayAmount
            }
            subtotal {
              displayAmount
              amount
              currency {
                code
              }
            }
          }
        }
        totalItemQuantity
      }
    }
  }
`;
