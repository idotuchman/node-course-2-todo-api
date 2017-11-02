// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59faa648e7c3da8adb7640ca')
  //
  // }, {
  //   $set: { completed: true }
  // }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59fa3d9be430513a3c156bcf')
  }, {
    $set: {name: 'Joe'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
