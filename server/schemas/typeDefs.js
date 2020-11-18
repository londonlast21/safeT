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

type Auth {
    token: ID!
    user: User
}



type Query {

    me: User
    
    users: [User]
    user(username: String!): User

    posts(username: String): [Post]
    post(_id: ID!): Post
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

// export the typeDefs
module.exports = typeDefs;