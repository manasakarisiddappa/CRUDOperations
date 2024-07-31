import { useContext } from "react";
import { CRUDContext } from "../../context/CRUDContext";
import usePosts from "../../hooks/usePosts";

const DeletePost = ({ post }) => {
  const { dispatch } = useContext(CRUDContext);
  const {deletePost} = usePosts();

  if (window.confirm("Are you sure?")) {
    deletePost(post.id)
    return;
  }
};

export default DeletePost;
