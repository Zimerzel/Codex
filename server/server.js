const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

//Apollo Server
const startServer = async () => {
  //new server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    //context: authMiddleware
  });

  await server.start();

  server.applyMiddleware({ app });

  //test api
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});