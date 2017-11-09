const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemover()

Todo.findByIdAndRemove('5a02a1d9aca6cd39a049f250').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove(_id:)
