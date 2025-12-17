import express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

app.get('/', (req, res) => {
  const day = new Date().getDay();
  const isWeekday = day === 0 || day === 6;
  res.render('index', { isWeekday: isWeekday });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
