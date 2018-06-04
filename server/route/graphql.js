const Router = require("express").Router;
/* const graphqlHTTP = require("express-graphql");
const buildSchema = require("graphql").buildSchema; */
const service = require("../service");

const { graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const router = Router();

var typeDefs = `
type Query {
  posts: [Post]
}
type Post {
  title: String,
  content : String,
  categoryId : Int
}
`;

const resolvers = {
  Query: {
    posts() {
      return service.getPosts();
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  cacheControl: true
});

router.use(
  graphqlExpress({
    tracing: true,
    schema
  })
);

module.exports = router;
