// src/components/Post.js
import { useContext } from "react";
import "./PostCard.css";
import { CRUDContext } from "../../context/CRUDContext";

const PostCard = ({ post }) => {
  const { dispatch } = useContext(CRUDContext);
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        <button
          onClick={() =>
            dispatch({ type: "SET_MODAL", modalType: "edit", modalData: post })
          }
          className="post-edit-button"
        >
          Edit
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "SET_MODAL",
              modalType: "delete",
              modalData: post,
            })
          }
          className="post-delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
