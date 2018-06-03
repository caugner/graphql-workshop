const Router = require("express").Router;
const graphqlHTTP = require("express-graphql");
const buildSchema = require("graphql").buildSchema;
const service = require("../service");

const router = Router();

var schema = buildSchema(`
type Query {
  posts: [Post]
}
type Post {
  title: String,
  content : String,
  categoryId : Int
}
`);

var root = {
  posts() {
    return service.getPosts();
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
