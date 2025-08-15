import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [posts, setPosts] = useState(postData);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? post.likes > 0 ? { ...post, likes: post.likes - 1 } : post : post
      )
    );
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      {posts.map((post) => (
        <div class="post-list" key={post.id}>
          <div class="post-item">
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes:</span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">{post.content}</p>
            <div class="post-actions" style={{ display: "flex" }}>
              <button class="like-button" onClick={() => handleLike(post.id)}>Like</button>
              <button class="dislike-button" onClick={() => handleDislike(post.id)}>Dislike</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
