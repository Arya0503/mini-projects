# Task 35: Simple Node.js Web Server

## Project Overview

This project is a custom web server built entirely with Node.js core modules. It listens on port 3000 and handles basic HTTP routing to serve customized HTML pages based on the user's request.

## Technical Details

- **Modules Used:** `http` for server creation, `fs.promises` for asynchronous file reading, and `path` for safe directory routing.
- **Routing:** Implemented strict route checking for `/home`, `/about`, and `/contact`.
- **Status Codes:** Successfully returns `200 OK` for valid pages and a `404 Not Found` paired with a custom error HTML page for invalid routes.
- **Styling:** CSS was embedded directly into the HTML files to ensure proper styling delivery without requiring complex static file routing logic.

## How to Run

1. Open the terminal.
2. Run `node server.js`.
3. Visit `http://localhost:3000/home` in your browser.
