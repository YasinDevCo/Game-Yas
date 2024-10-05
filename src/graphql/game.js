import { gql } from "@apollo/client";

const QUERY_GET_GAMES_SLIDE = gql`
  query {
    gameTables {
      id
      description
      title
      price
      purchase_count
      image {
        id
        url
      }
    }
  }
`;
export default QUERY_GET_GAMES_SLIDE;
