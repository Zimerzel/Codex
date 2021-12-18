//import graphql
const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Review {
        _id: ID
        reviewText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        reviews: [Review]
        friends: [User]
    }
    type Query {
        users: [User]
        user(username: String!): User
        reviews(username: String): [Review]
        review(_id: ID!): Review
    }
`;

module.exports = typeDefs;