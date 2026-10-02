# Task 37: Full-Stack To-Do List Application

## Project Overview

This project integrates a fully functional backend API built with Node.js, Express, and MongoDB with a dynamic React frontend frontend using Axios.

## Environment Variables & Configuration

### Backend

Create a `.env` file in the `backend` directory with the following variables:

- `PORT=5000`
- `MONGO_URI=your_mongodb_atlas_connection_string`

### Frontend

The frontend uses Axios to fetch data. The `API_URL` is hardcoded to `http://localhost:5000/api/tasks` for local development. When hosting on Netlify, this URL should be updated to point to the live Render backend URL.

## Setup Instructions

1. **Backend:** Navigate to the `backend` folder, run `npm install`, and start the server using `node server.js`.
2. **Frontend:** Navigate to the `frontend` folder, run `npm install`, and start the React app using `npm run dev`.

## Challenges and Solutions

- **Challenge:** Maintaining state synchronization between the backend database and the React UI after updating or deleting tasks.
- **Solution:** I utilized Axios `.then()` and `.catch()` syntax alongside React's `useState` to update the local array only after a successful HTTP response is confirmed from the Express server.
- **Challenge:** Handling search functionality asynchronously.
- **Solution:** I updated the backend service layer to utilize MongoDB's `$regex` operator, allowing the frontend to pass a query string that filters the results natively in the database before sending them back.
