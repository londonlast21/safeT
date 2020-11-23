const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { post } = require('../models/Comment');
const { signToken, Auth } = require('../utils/auth');



const resolvers = {
    Query: {

        // get me
        me: async (parent, args) => {
            console.log('hit backend getMe resolver');
            if (context.user) {
            const userData = await User.findOne({})  
              .select('-__v -password')
              .populate('posts')
              .populate('comments');
        
            return userData;
            }

            throw new AuthenticationError('Not logged in');
            
            
        },

        // get all users
        users: async () => {
            console.log('hit get all users in backend resolvers');
            return User.find()
            .select('-__v -password')
            .populate('posts')
            .populate('comments');
        },
        // get a single user by username
        user: async (parent, { username }) => {
            console.log('hit get single user in backend resolvers');
            return User.findOne({ username })
            .select('-__v -password')
            .populate('posts');
        },
        // get all posts arrange by username
        posts: async (parent, { username }) => {
                     const params = username ? { username } : {};
                     console.log('hit backend getPosts resolver');
                  const postRes = await Post.find().sort({ createdAt: -1 });
         console.log('POST:', postRes)
         return postRes
         },
         
        // get a single post by post ID
        post: async (parent, { _id }) => {
            console.log('hit backend getPost resolver');
            return Post.findOne({ _id });
        },

        


    },

    Mutation: {
        
        // create and add new user
        addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);
                
                console.log('hit backend addUser resolver');

                return { token, user };

        },

        // log in user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            console.log('hit backend login resolver');
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
        },

        //create a new post
        addPost: async (parent, args, context) => {
            console.log('hit backend addPost resolver');
            if (context.user) {
              const post = await Post.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { posts: post._id } },
                { new: true }
              );
          
              return post;
            }
          
            throw new AuthenticationError('Only users with accounts may interact');
        },

        // add a comment to a post
        addComment: async (parent, { postId, commentBody }, context) => {
            console.log('hit backend addComment resolver');
            if (context.user) {
              const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $push: { comments: { commentBody, username: context.user.username } } },
                { new: true, runValidators: true }
              );
          
              return updatedPost;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          // delete post
          async deletePost(_, { postId }, context){
            const user = Auth;

            try{
                const post = await Post.findById(postId);
                if(user.username === post.username){
                    await post.delete();
                    return 'Post deleted successfully';
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
          },

          // delete comment
          async deleteComment(_, { postId, commentId}, context){
            const { username } = Auth(context);

            const post = await Post.findById(postId);
            
            if(post){
               const commentIndex = post.comments.findIndex(c => c.id === commentId);

               if(post.comments[commentIndex].username === username){
                   post.comments.splice(commentIndex, 1);
                   await post.save();
                   return post;
               } else {
                   throw error('Action not allowed')
               }
            } else {
                throw error('Post not found')
            }
          },

    }
};
  
  module.exports = resolvers;