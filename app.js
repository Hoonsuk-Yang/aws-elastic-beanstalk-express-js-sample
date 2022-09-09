const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello tutorial. It is my first step to be a real devops\nWhere do we go now.. '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
