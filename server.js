const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const PORT = 3000;

const serveFile = async (res, filePath, statusCode) => {
  try {
    const data = await fs.readFile(filePath);
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(data);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 - Internal Server Error");
  }
};

const server = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === "/" || url === "/home") {
    await serveFile(res, path.join(__dirname, "pages", "home.html"), 200);
  } else if (url === "/about") {
    await serveFile(res, path.join(__dirname, "pages", "about.html"), 200);
  } else if (url === "/contact") {
    await serveFile(res, path.join(__dirname, "pages", "contact.html"), 200);
  } else {
    await serveFile(res, path.join(__dirname, "pages", "404.html"), 404);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
