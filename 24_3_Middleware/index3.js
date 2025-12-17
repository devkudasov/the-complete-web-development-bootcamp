import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(logger);

app.get('/', (req, res) => {
  console.log('Hello');
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req, res, next) {
  console.log(`${req.method} | ${req.url} | ${new Date().toISOString()}`);
  next();
}
