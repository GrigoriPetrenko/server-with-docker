// const res = require('express/lib/response');
const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello from container)))');
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://127.0.0.1:${PORT}`)
);
