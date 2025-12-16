import express from 'express';
import path from 'path';
const indexPath = path.join(import.meta.dirname, 'public', 'index.html');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(indexPath);
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
