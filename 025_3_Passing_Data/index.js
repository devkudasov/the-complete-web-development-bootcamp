import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

function getNumberOfLetters(fName, lName) {
  return (fName?.length ?? 0) + (lName?.length ?? 0);
}

app.get('/', (req, res) => {
  res.render('index.ejs', {
    numberOfLetters: getNumberOfLetters(req.body.fName, req.body.lName),
  });
});

app.post('/submit', (req, res) => {
  res.render('index.ejs', {
    numberOfLetters: getNumberOfLetters(req.body.fName, req.body.lName),
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
