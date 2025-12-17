import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const indexPath = path.join(import.meta.dirname, 'public', 'index.html');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.post('/submit', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
