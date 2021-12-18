const { User, Review } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const resolvers = {
  Query: {
    reviews: async(parent, { username }) => {
      const params = username ? { username } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },
    review: async (parents, { _id }) => {
      return Review.findOne({ _id });
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('reviews');
    },
    user: async(parents, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('reviews');
    },
  },
  Mutation: {
    addUser: async(parent, args) => {
      const user = await User.create(args);

      return user;
    },
    
    login: async(parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      return user;
    }
  }
};

module.exports = resolvers;