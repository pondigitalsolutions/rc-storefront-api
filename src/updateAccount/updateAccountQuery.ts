import gql from "graphql-tag";

export default gql`
  mutation UpdateAccountMutation($input: UpdateAccountInput!) {
    updateAccount(input: $input) {
      account {
        _id
        addressBook {
          nodes {
            _id
            address1
            city
            country
            isBillingDefault
            isCommercial
            isShippingDefault
            phone
            postal
            region
          }
        }
        createdAt
        firstName
        lastName
        language
        name
        primaryEmailAddress
        userId
        updatedAt
        username
      }
    }
  }
`;
