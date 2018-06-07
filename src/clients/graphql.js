import axios from "axios";

export async function getPosts(limit, offset) {
  const result = await axios.post('/graphql', { query: `{ posts { id, title, content, comments { id, content } } }` })
  console.log(result);
  return result.data.data.posts;
}

export async function addNewPost(newPost) {}

export async function addNewComment(comment, postId) {
  const result = await axios.post(
    '/graphql',
    {
      query: `mutation createComment($postId: ID!, $content: String!) {
        createComment (
          postId: $postId,
          content: $content
        ) {
          id
          content
        }
      }`,
      variables: {
        postId,
        content: comment.content
      }
    });
  console.log(result);
  return result.data.data.createComment;
}
