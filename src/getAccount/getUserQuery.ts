import gql from "graphql-tag";

export default gql`
  query AccountQuery($id: ID!) {
    account(id: $id) {
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
          number
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
`;
