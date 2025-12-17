import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

const publicPath = path.join(import.meta.dirname, 'public');
const indexPath = path.join(publicPath, 'index.html');
const secretPath = path.join(publicPath, 'secret.html');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.post('/check', (req, res) => {
  const password = req.body.password;
  if (password === 'ILoveProgramming') {
    res.sendFile(secretPath);
  } else {
    res.sendFile(indexPath);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
