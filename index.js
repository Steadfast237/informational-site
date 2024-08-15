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
