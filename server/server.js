const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')

const {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app= express();

app.use(bodyParser.json());
app.post('/todos', ( req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }), (e) => {
    res.status(400).send(e);
  }
});

//GET /todos/132343
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

  //validate id using isValid
    // 404 - send back empty send

  //findById
    // success
      // if todo - send it back
      // if no todo - 404 with empty body
    // error
      // 400 - and send empty body back

});

app.listen(3000, () => {
  console.log('Starting on port 3000');
});

module.exports = {app};
