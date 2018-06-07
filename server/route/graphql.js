const Router = require("express").Router;
const graphqlHTTP = require("express-graphql");
const buildSchema = require("graphql").buildSchema;
const service = require("../service");

const router = Router();

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    posts: [Post]
  }
`);

router.use(
  graphqlHTTP({
    schema,
    rootValue: {},
    graphiql: true
  })
);

module.exports = router;
