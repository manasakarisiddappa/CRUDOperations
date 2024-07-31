// src/components/PostList.js
import { useContext, useEffect, useState } from "react";
import "./PostList.css";
import PostCard from "../PostCard/PostCard";
import AddPost from "../AddPost/AddPost";
import { CRUDContext } from "../../context/CRUDContext";
import postsApi from "../../services/apiConfig";

const PostList = () => {
  const { state, dispatch } = useContext(CRUDContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
