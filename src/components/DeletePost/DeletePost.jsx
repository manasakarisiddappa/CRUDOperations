import { useContext } from "react";
import { PostService } from "../../services/postService";
import { CRUDContext } from "../../context/CRUDContext";

const DeletePost = ({ post }) => {
  const { state, dispatch } = useContext(CRUDContext);

  if (window.confirm("Are you sure?")) {
    PostService.deletePost().then(() => {
      dispatch({
        type: "SET_POSTS",
        payload: state.posts.filter((p) => p.id !== post.id),
      });
      dispatch({ type: "CLEAR_MODAL" });
    });
    return;
  }
};

export default DeletePost;
