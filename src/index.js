const express = require('express');
const morgan = require('morgan');
const newLocal = require('express-handlebars');
const { engine } = newLocal;
const path = require('path');
const app = express();
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/tin-tuc', (req, res) => {
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})