import ApiService from "./postService";

const postsApi = new ApiService(
  "https://jsonplaceholder.typicode.com/",
  "posts"
);
export default postsApi;
