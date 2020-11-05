import gql from "graphql-tag";

export default gql`
  mutation Mutation($input: AddAccountAddressBookEntryInput!) {
    addAccountAddressBookEntry(input: $input) {
      address {
        _id
        address1
        city
        country
        firstName
        fullName
        isBillingDefault
        isCommercial
        isShippingDefault
        lastName
        phone
        postal
        region
        number
      }
    }
  }
`;
