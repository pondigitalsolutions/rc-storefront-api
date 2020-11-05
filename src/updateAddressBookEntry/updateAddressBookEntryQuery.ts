import gql from "graphql-tag";

export default gql`
  mutation UpdateAddressBookEntryMutation(
    $input: UpdateAccountAddressBookEntryInput!
  ) {
    updateAccountAddressBookEntry(input: $input) {
      address {
        _id
      }
    }
  }
`;
