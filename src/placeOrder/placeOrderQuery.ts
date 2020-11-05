import gql from "graphql-tag";

export default gql`
  mutation PlaceOrderMutation($input: PlaceOrderInput!) {
    placeOrder(input: $input) {
      token
      orders {
        referenceId
      }
    }
  }
`;
