import gql from 'graphql-tag';


export const QUERY_POSTS = gql`
{
   posts {
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

export const QUERY_SINGLE_POST = gql`

query getPost($id: ID!) {
    post(_id: $id) {
        _id
        name
        type
        location
        username
        createdAt
        
        comments{
            _id
            username
            createdAt
            commentBody
        }
    }
}

`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        name
        type
        location
        createdAt
      }
    }
  }
`;

