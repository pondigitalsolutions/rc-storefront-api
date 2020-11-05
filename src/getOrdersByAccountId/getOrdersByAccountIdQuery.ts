import gql from "graphql-tag";

export default gql`
  query OrdersByAccountIdQuery(
    $accountId: ID!
    $language: String!
    $shopIds: [ID]!
  ) {
    ordersByAccountId(accountId: $accountId, shopIds: $shopIds) {
      nodes {
        _id
        account {
          _id
          primaryEmailAddress
        }
        cartId
        createdAt
        displayStatus(language: $language)
        email
        fulfillmentGroups {
          _id
          displayStatus(language: $language)
          totalItemQuantity
          items {
            nodes {
              _id
              price {
                amount
                displayAmount
              }
              title
              variantTitle
              quantity
              subtotal {
                amount
                displayAmount
              }
            }
          }
        }
        referenceId
        status
        totalItemQuantity
        updatedAt
        payments {
          _id
          amount {
            amount
            currency {
              code
            }
            displayAmount
          }
          cardBrand
          transactionId
          status
        }
      }
    }
  }
`;
