import { useContext } from "react";
import { CRUDContext } from "../../context/CRUDContext";
import postsApi from "../../services/apiConfig";

const DeletePost = ({ post }) => {
  const { state, dispatch } = useContext(CRUDContext);

  if (window.confirm("Are you sure?")) {
    postsApi
      .delete(post.id)
      .then(() => {
        dispatch({
          type: "SET_POSTS",
          payload: state.posts.filter((p) => p.id !== post.id),
        });
      })
      .catch((err) => {
        console.log("error creating posts", err);
      });
    dispatch({ type: "CLEAR_MODAL" });
    return;
  }
};

export default DeletePost;
