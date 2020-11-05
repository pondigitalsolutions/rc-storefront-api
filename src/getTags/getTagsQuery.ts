import gql from "graphql-tag";

export default gql`
  query getTags(
    $shopId: ID!
    $isTopLevel: Boolean
    $filter: String
    $first: ConnectionLimitInt
  ) {
    tags(
      shopId: $shopId
      isTopLevel: $isTopLevel
      filter: $filter
      first: $first
    ) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          _id
          displayTitle
          name
          isVisible
          updatedAt
          createdAt
          isTopLevel
          slug
          heroMediaUrl
          subTagIds
          metafields {
            key
            value
          }
          subTags {
            nodes {
              _id
              displayTitle
              name
              isVisible
              updatedAt
              createdAt
              isTopLevel
              slug
            }
          }
        }
      }
    }
  }
`;
