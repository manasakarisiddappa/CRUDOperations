// src/hooks/usePosts.js
import { useState, useEffect, useContext } from "react";
import postsApi from "../services/apiConfig";
import { CRUDContext } from "../context/CRUDContext";

const usePosts = () => {
  const { state, dispatch } = useContext(CRUDContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

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
        dispatch({
          type: "SET_POSTS",
          payload: [response.data, ...state.posts],
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const updatePost = (id, updatedPost) => {
    postsApi
      .update(id, updatedPost)
      .then((response) => {
        dispatch({
          type: "SET_POSTS",
          payload: state.posts.map((p) =>
            p.id === response.data.id ? response.data : p
          ),
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const deletePost = (id) => {
    postsApi
      .delete(id)
      .then(() => {
        dispatch({
          type: "SET_POSTS",
          payload: state.posts.filter((p) => p.id !== id),
        });
        dispatch({ type: "CLEAR_MODAL" });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePosts;
