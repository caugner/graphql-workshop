import axios from "axios";

export async function getPosts() {
  const {
    data: {
      data: { posts }
    }
  } = await axios.post("/graphql", {
    query: `{
      posts {
        title
        content
        categoryId
      }
    }`
  });
  return posts;
}
