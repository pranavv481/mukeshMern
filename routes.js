const express = require('express');
const mongoose = require('mongoose');
const { mongourl } = require('./config/key');
const Wish = mongoose.model('wishes');
const app = express();

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = (app) => {
  // var data = ['code', 'eat', 'sleep'];

  // get routes
  app.get('/data', (req, res) => {
    Wish.find({}).then((data) => {
      console.log(data);
      res.send(data);
      // res.render('home', { wish: data });
    });
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });

  // post routes
  app.post('/sent', (req, res) => {
    const Item = new Wish({
      wish: req.body.item,
    });
    Item.save()
      .then((data) => {
        console.log('saved');
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // delete routes
  app.delete('/remove/:id', (req, res) => {
    Wish.findOneAndDelete({ _id: req.params.id }).then((data) => {
      console.log('delete');
      res.send(data);
    });
  });
};
