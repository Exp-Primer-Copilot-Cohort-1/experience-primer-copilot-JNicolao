// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create a new comment
app.post('/comments', function(req, res) {
  var comment = req.body;
  var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.status(201).end();
});

// Get all comments
app.get('/comments', function(req, res) {
  var comments = fs.readFileSync('comments.json', 'utf8');
  res.send(comments);
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});