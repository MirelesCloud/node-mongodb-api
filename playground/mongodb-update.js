//const MongoClient = require('mongodb').MongoClient;
//or for destructuring do this:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  let db = client.db('TodoApp');
  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ba1bb40f262f113c15395b8')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  */
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ba1ba5df9f8fe13c90221ba')
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //client.close();
});
