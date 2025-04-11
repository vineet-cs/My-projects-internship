const http = require('http');

const port = 3001; // Choose your desired port number

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hel World!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
