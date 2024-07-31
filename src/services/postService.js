import postsApi from "./apiConfig";

export class PostService {
  static fetchPosts = () => {
    return postsApi
      .getData()
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("error fetching the data", err);
        throw err;
      });
  };

  static createPost = (newPost) => {
    return postsApi
      .create(newPost)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("error creating the data", err);
        throw err;
      });
  };

  static updatePost = (id, updatedPost) => {
    return postsApi
      .update(id, updatedPost)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("error updating the data", err);
        throw err;
      });
  };

  static deletePost = (id) => {
    return postsApi
      .delete(id)
      .then(() => {
        return;
      })
      .catch((err) => {
        console.log("error deleting the data", err);
        throw err;
      });
  };
}
