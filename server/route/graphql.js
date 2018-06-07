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

const resolvers = {
  posts (obj, args, context) {
    return service.getPosts();
  }
}

router.use(
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

module.exports = router;
