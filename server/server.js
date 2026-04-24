const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

app.use(express.static(path.join(__dirname,'../system_metric')));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../system_metric/src/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});