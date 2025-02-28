// src/components/PostList.js
import { useContext, useEffect } from "react";
import "./PostList.css";
import PostCard from "../PostCard/PostCard";
import AddPost from "../AddPost/AddPost";
import { CRUDContext } from "../../context/CRUDContext";
import postsApi from "../../services/apiConfig";
import { useDispatch } from "react-redux";
import { setPosts } from "../../store/postSlice";

const PostList = () => {
  const { state, dispatch } = useContext(CRUDContext);
  const reduxdispatch = useDispatch();

  useEffect(() => {
    postsApi.getData().then((data) => {
      dispatch({ type: "SET_POSTS", payload: data });
      reduxdispatch(setPosts(data));
    });
  }, [dispatch, reduxdispatch]);

  if (!state.posts.length) return <p>Loading...</p>;

  return (
    <div>
      <div className="heading">
        <h1>Posts data</h1>
        <AddPost />
      </div>
      <div className="container">
        <div className="posts-container">
          {state.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
