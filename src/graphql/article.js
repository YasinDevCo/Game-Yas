import { gql } from "@apollo/client";

const QUERY_GET_ARTICLE = gql`
  query {
    articleTables {
      article_id
      summary
      title
      category
      author
      viewCount
      image {
        url
      }
      content {
        text
      }
    }
  }
`;

export default QUERY_GET_ARTICLE;
