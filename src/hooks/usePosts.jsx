// src/hooks/usePosts.js
import { useState, useEffect, useContext } from "react";
import postsApi from "../services/apiConfig";
import { CRUDContext } from "../context/CRUDContext";

const usePosts = () => {
  const { state, dispatch } = useContext(CRUDContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    postsApi
      .getData()
      .then((response) => {
        dispatch({ type: "SET_POSTS", payload: response.data });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const createPost = (newPost) => {
    postsApi
      .create(newPost)
      .then((response) => {
        setPosts((prevPosts) => [response.data, ...prevPosts]);
        fetchPosts();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const updatePost = (id, updatedPost) => {
    postsApi
      .update(id, updatedPost)
      .then((response) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === id ? response.data : post))
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const deletePost = (id) => {
    postsApi
      .delete(id)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePosts;
