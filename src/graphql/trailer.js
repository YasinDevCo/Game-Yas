import { gql } from "@apollo/client";

const QUERY_GET_TRAILERS = gql`
  query {
    trailerTables {
      id
      title
      image {
        url
      }
      duration
      short_description
      views
      publisher
      publisherAvatar {
        url
      }
      trailers {
        id
        size
        createdAt
        url
      }
    }
  }
`;
export default QUERY_GET_TRAILERS;
