import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/huang', (req, res) => {
  res.send('Hello Huang!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
