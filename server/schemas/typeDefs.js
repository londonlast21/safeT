// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Post {
    _id: ID
    name: String!
    type: String!
    location: String!
    createdAt: String
    username: String
    commentCount: Int
    

    
}

type Query {
    posts: [Post]
  }
`;

// export the typeDefs
module.exports = typeDefs;