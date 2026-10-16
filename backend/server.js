require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Missing fields" });

  const userExists = users.find((u) => u.username === username);
  if (userExists) return res.status(400).json({ error: "User already exists" });

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: `Welcome to the protected route, ${req.user.username}!`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
