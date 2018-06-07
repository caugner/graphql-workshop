import axios from "axios";

export async function getPosts(limit, offset) {
  const result = await axios.post('/graphql', { query: `{ posts { id, title, content } }` })
  console.log(result);
  return result.data.data.posts;
}

export async function addNewPost(newPost) {}

export async function addNewComment(comment, postId) {}
