import gql from "graphql-tag";

export default gql`
  query anonymousCartByCartIdQuery($cartId: ID!, $cartToken: String!) {
    anonymousCartByCartId(cartId: $cartId, cartToken: $cartToken) {
      _id
      account {
        _id
      }
      checkout {
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
              address1
              address2
              city
              company
              country
              isBillingDefault
              isShippingDefault
              phone
              postal
            }
          }
          selectedFulfillmentOption {
            fulfillmentMethod {
              displayName
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
`;
