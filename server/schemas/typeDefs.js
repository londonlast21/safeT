// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    posts: [Post]
    
}

type Post {
    _id: ID
    name: String!
    type: String!
    location: String!
    createdAt: String
    username: String
    comments: [Comment]
    commentCount: Int

    
}

type Comment {
    _id: ID
    commentBody: String!
    username: String
    createdAt: String
}



type Query {
    
    users: [User]
    user(username: String!): User

    posts(username: String): [Post]
    post(_id: ID!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;