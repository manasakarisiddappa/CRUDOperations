// src/components/Modal.js
import { useState, useEffect, useContext } from "react";
import "./Modal.css";
import { CRUDContext } from "../../context/CRUDContext";
import postsApi from "../../services/apiConfig";

const Modal = ({ post }) => {
  const { state, dispatch } = useContext(CRUDContext);
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const validate = () => {
    let valid = true;
    let errors = {};
    if (!title || title.trim() === "") {
      errors.title = "Title is required";
      valid = false;
    }
    if (!body || body.trim() === "") {
      errors.body = "Body is required";
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      let PostDetails = { title, body };
      if (post) {
        postsApi
          .update(post.id, PostDetails)
          .then((response) => {
            dispatch({
              type: "SET_POSTS",
              payload: state.posts.map((p) =>
                p.id === response.data.id ? response.data : p
              ),
            });
          })
          .catch((err) => {
            console.log("error creating posts", err);
          });
      } else {
        postsApi
          .create(PostDetails)
          .then((response) => {
            dispatch({
              type: "SET_POSTS",
              payload: [response.data, ...state.posts],
            });
          })
          .catch((err) => {
            console.log("error creating posts", err);
          });
      }

      dispatch({ type: "CLEAR_MODAL" });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Add New Entry</h2>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={errors.title ? "input-error" : ""}
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className={errors.body ? "input-error" : ""}
            />
            {errors.body && <span className="error">{errors.body}</span>}
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary" onClick={handleSave}>
              Save
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: "CLEAR_MODAL" })}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
