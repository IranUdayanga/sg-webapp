const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const environment = process.env.NODE_ENV || 'development';
const appName = process.env.APP_NAME || 'My App';

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to ${appName} - Environment: ${environment}</h1>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
