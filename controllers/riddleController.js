//BASIC RIDDLE FUNCTIONS PAGE
//(RIDDLES STORED IN MONGODB)

const Riddle = require('../models/riddle');

const riddle_index = (req, res) => {
  Riddle.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { riddles: result, title: 'All riddles' });
    })
    .catch(err => {
      console.log(err);
    });
}

const riddle_details = (req, res) => {
  const id = req.params.id;
  Riddle.findById(id)
    .then(result => {
      res.render('details', { riddle: result, title: 'Riddle Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const riddle_create_get = (req, res) => {
  res.render('create', { title: 'Create a new riddle' });
}

const riddle_create_post = (req, res) => {
  const riddle = new Riddle(req.body);
  riddle.save()
    .then(result => {
      res.redirect('/riddles');
    })
    .catch(err => {
      console.log(err);
    });
}

const riddle_delete = (req, res) => {
  const id = req.params.id;
  Riddle.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/riddles' });
    })
    .catch(err => {
      console.log(err);
    });
}


module.exports = {
  riddle_index, 
  riddle_details, 
  riddle_create_get, 
  riddle_create_post, 
  riddle_delete
}