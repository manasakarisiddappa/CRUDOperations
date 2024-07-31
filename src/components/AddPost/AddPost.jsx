import { useContext } from "react";
import "./AddPost.css";
import { CRUDContext } from "../../context/CRUDContext";

const AddPost = () => {
  const { dispatch } = useContext(CRUDContext);
  const handleAddPost = () => {
    dispatch({ type: "SET_MODAL", modalType: "add", modalData: null });
  };
  return (
    <div>
      <button className="create-btn" onClick={handleAddPost}>
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
