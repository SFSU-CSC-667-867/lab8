const express = require('express');
const app = express();

app.get('/service1', (req, res) => {
  console.log(req.url);
  res.send('Service1');
});

app.get('/service2', (req, res) => {
  console.log(req.url);
  res.send('Service2');
});

app.listen(4000);