import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // User Form State
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Post Form State
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedAuthorId, setSelectedAuthorId] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(`${API_URL}/users`);
    setUsers(res.data);
  };

  const fetchPosts = async () => {
    const res = await axios.get(`${API_URL}/posts`);
    setPosts(res.data);
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/users`, { name: userName, email: userEmail });
    setUserName("");
    setUserEmail("");
    fetchUsers(); // Refresh user list for the dropdown
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAuthorId) return alert("Please select an author");

    await axios.post(`${API_URL}/posts`, {
      title: postTitle,
      content: postContent,
      authorId: selectedAuthorId,
    });
    setPostTitle("");
    setPostContent("");
    setSelectedAuthorId("");
    fetchPosts(); // Refresh posts to see the new one
  };

  return (
    <div className="container">
      <h1>Schema Reference Task</h1>

      <div className="forms-section">
        <form onSubmit={handleUserSubmit} className="card">
          <h2>1. Create User</h2>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <button type="submit">Add User</button>
        </form>

        <form onSubmit={handlePostSubmit} className="card">
          <h2>2. Create Post</h2>
          <input
            type="text"
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Post Content"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
          />
          <select
            value={selectedAuthorId}
            onChange={(e) => setSelectedAuthorId(e.target.value)}
            required
          >
            <option value="">Select Author...</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
          <button type="submit">Add Post</button>
        </form>
      </div>

      <div className="posts-section">
        <h2>All Posts (Populated)</h2>
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="author-info">
              <small>
                <strong>Author:</strong>{" "}
                {post.author ? post.author.name : "Unknown"} |
                <strong> Email:</strong>{" "}
                {post.author ? post.author.email : "N/A"}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
