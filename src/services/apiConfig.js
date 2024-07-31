import ApiService from "./api";

const postsApi = new ApiService(
  "https://jsonplaceholder.typicode.com/",
  "posts"
);
export default postsApi;
