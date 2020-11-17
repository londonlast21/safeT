const { AuthenticationError } = require('apollo-server-express');

const { User, Post } = require('../models');

const resolvers = {
    Query: {
        // get all posts arrange by username
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            console.log('hit backend getPosts resolver');
            return post.find(params).sort({ createdAt: -1 });
            
        },
        // get a single post by post ID
        post: async (parent, { _id }) => {
            console.log('hit backend getPost resolver');
            return Post.findOne({ _id });
        },

        // get all users
        users: async () => {
            console.log('hit get all users in backend resolvers');
            return User.find()
            .select('-__v -password')
            .populate('posts');
        },
        // get a single user by username
        user: async (parent, { username }) => {
            console.log('hit get single user in backend resolvers');
            return User.findOne({ username })
            .select('-__v -password')
            .populate('posts');
        },


    },

    Mutation: {
        
        // create and add new user
    addUser: async (parent, args) => {
            const user = await User.create(args);
            console.log('hit backend addUser resolver');
            return user;

        },

        // log in user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            return user;
          }
    }
};
  
  module.exports = resolvers;