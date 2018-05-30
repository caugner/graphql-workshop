const Router = require("express").Router;
const graphqlHTTP = require("express-graphql");
const buildSchema = require("graphql").buildSchema;
const service = require("../service");

const router = Router();

var schema = buildSchema(`
type Query {
  posts: [Int]
}
`);

var root = {
  posts: () => {
    return [1, 2, 3];
  }
};

router.use(
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = router;
