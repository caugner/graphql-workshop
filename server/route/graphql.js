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
    comments: [Comment]
  }

  type PostInput {
    title: String!
    content: String!
  }

  type Comment {
    id: ID!
    content: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createComment(postId: ID!, content: String): Comment
    createPost(newPost: PostInput): Post
  }
`);

const resolvers = {
  posts (obj, args, context) {
    return service.getPosts();
  },
  createComment (obj, args, context) {
    return service.addNewCommentFor(obj.postId, obj.content);
  },
  createPost (obj, args, context) {
    return service.addNewPost(obj.newPost);
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
