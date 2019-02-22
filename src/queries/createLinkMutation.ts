import { gql } from "apollo-boost";

export default gql`
  mutation CreateLinkMutation($url: String!, $description: String!) {
    createLink(url: $url, description: $description) {
      id
      url
      description
    }
  }
`;
