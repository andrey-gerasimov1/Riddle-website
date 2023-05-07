//basic riddle website; create, view and delete riddles online

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const riddleRoutes = require('./routes/riddleRoutes');
const app = express();
const dbURI = "";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  res.redirect('/riddles');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use('/riddles', riddleRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});