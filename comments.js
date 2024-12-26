// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Use body-parser to parse JSON data sent to server
app.use(bodyParser.json());

// Use express.static to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Array to store comments
const comments = [
  {
    username: "Alice",
    comment: "I love this article!"
  },
  {
    username: "Bob",
    comment: "This article is awesome!"
  }
];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});