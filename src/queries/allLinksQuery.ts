import { gql } from "apollo-boost";

export default gql`
  query AllLinksQuery {
    allLinks {
      id
      url
      description
    }
  }
`;
