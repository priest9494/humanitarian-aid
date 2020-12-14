const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.port || 3030;

const teaTree = require('./controller/helloController');

app.use(cors({
  preflightContinue: true,
  credentials: true,
}));

app.use('/hello', teaTree);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})