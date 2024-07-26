import React, { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({ isPosting, onStopPosting }) => {
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...posts]);
  }
  return (
    <React.Fragment>
      {isPosting ? (
        <Modal>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      {posts.length > 0 && (
        <ul className="flex flex-row gap-10">
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className="text-center">
          <h2 className="text-3xl font-semibold">There are no posts yet!</h2>
          <p className="font-extralight">Start by creating one.</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostList;
