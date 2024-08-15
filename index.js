// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// const server = http.createServer();

// server.on('request', (req, res) => {
//   const urlPath = url.parse(req.url, true);

//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   if (urlPath.pathname === '/') {
//     fs.readFile('./index.html', 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       return res.end(data);
//     });
//   }

//   if (urlPath.pathname === '/about') {
//     fs.readFile('./about.html', 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       return res.end(data);
//     });
//   }

//   if (urlPath.pathname === '/contact-me') {
//     fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       return res.end(data);
//     });
//   }

//   fs.readFile('./404.html', 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     return res.end(data);
//   });
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

const express = require('express');
const path = require('path');

const app = express();

const options = {
  root: path.join(__dirname, 'public'),
  headers: {
    'Content-Type': 'text/html',
  },
};

app.get('/', (req, res) =>
  res.sendFile('index.html', options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Sent: index.html');
    }
  })
);

app.get('/about', (req, res) =>
  res.sendFile('about.html', options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Sent: about.html');
    }
  })
);

app.get('/contact-me', (req, res) =>
  res.sendFile('contact-me.html', options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Sent: contact.html');
    }
  })
);

app.get('*', (req, res) =>
  res.sendFile('404.html', options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Sent: 404.html');
    }
  })
);

const PORT = 3000;
app.listen(PORT, 'localhost', () =>
  console.log(`Server runing on PORT: ${PORT}`)
);
