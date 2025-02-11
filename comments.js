// Create web server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Create a route for comments/:id/put

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

app.get('/comments/new', (req, res) => {
  res.send('GET /comments/new');
});

app.get('/comments/:id', (req, res) => {
  res.send('GET /comments/:id');
});

app.get('/comments/:id/edit', (req, res) => {
  res.send('GET /comments/:id/edit');
});

app.get('/comments/:id/delete', (req, res) => {
  res.send('GET /comments/:id/delete');
});

app.get('/comments/:id/put', (req, res) => {
  res.send('GET /comments/:id/put');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
// In the code above, we created a web server and created routes for comments, comments/new, comments/:id, comments/:id/edit, comments/:id/delete, and comments/:id/put. The routes are created using the app.get() method which is used to handle GET requests.

// The code above will run a server on http://localhost:3000. When you visit http://localhost:3000/comments, you will receive a response GET /comments. Similarly, when you visit http://localhost:3000/comments/new, you will receive a response GET /comments/new. You can replace comments with the other routes to see the responses for those routes.