const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello, friend');
});

const port = process.env.PORT || '3000';
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
