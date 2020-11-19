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