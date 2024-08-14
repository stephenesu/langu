const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Microservice 2 - Node.js API');
});

app.listen(port, () => {
  console.log(`Microservice 2 listening at http://localhost:${port}`);
});

