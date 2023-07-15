const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the home page');
  } else if (req.url === '/about') {
    res.end('This is our about page');
  } else {
    res.end(`
      <h1>Oops</h1>
      <p>Error in the page</p>
      <a href="/">Back home</a>
    `);
  }
});

server.keepAliveTimeout = 0; // Disable automatic connection closing

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
