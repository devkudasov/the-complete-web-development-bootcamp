import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const indexPath = path.join(import.meta.dirname, 'public', 'index.html');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.post('/submit', (req, res) => {
  res.send(
    `<h1>Your band name is:</h1><h2>${req.body.street}${req.body.pet}</h2>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
