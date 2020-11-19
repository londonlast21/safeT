import gql from 'graphql-tag';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      name
      type
      location
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;