const { User, Review } = require('../models');

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
  }
};

module.exports = resolvers;