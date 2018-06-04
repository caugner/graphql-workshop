import axios from "axios";

export async function getPosts() {
  const resp = await axios.get("/rest/posts");
  return resp.data.data;
}
