import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async (searchQuery = "") => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_URL}?search=${searchQuery}`);
      setTasks(res.data);
    } catch (err) {
      setError("Failed to fetch tasks from the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTasks(search);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title) return;
    try {
      const res = await axios.post(API_URL, { title, description });
      setTasks([res.data, ...tasks]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError("Failed to create task.");
    }
  };

  const handleUpdateStatus = async (id, currentStatus) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        completed: !currentStatus,
      });
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      setError("Failed to update task status.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  return (
    <div className="app-container">
      <h1>Full-Stack To-Do List</h1>

      {error && <div className="error-banner">{error}</div>}

      <form onSubmit={handleSearch} className="control-form">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="primary-btn">
          Search
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={() => {
            setSearch("");
            fetchTasks("");
          }}
        >
          Clear
        </button>
      </form>

      <form onSubmit={handleCreate} className="control-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="primary-btn">
          Add Task
        </button>
      </form>

      {loading ? (
        <div className="loader">Loading tasks...</div>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => (
            <div
              key={task._id}
              className={`task-card ${task.completed ? "completed" : ""}`}
            >
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="task-actions">
                <button
                  className="status-btn"
                  onClick={() => handleUpdateStatus(task._id, task.completed)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
