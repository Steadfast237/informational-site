const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  const urlPath = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (urlPath.pathname === '/') {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.end(data);
    });
  }

  if (urlPath.pathname === '/about') {
    fs.readFile('./about.html', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.end(data);
    });
  }

  if (urlPath.pathname === '/contact-me') {
    fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.end(data);
    });
  }

  fs.readFile('./404.html', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
