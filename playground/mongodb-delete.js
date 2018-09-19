//const MongoClient = require('mongodb').MongoClient;
//or for destructuring do this:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  let db = client.db('TodoApp');

  //deleteMany
  //db.collection('Todos').deleteMany({text: 'eating'}).then((result) => {
  //  console.log(result);
  //});

  //deleteOne
  //db.collection('Todos').deleteOne({text: 'whatever'}).then((result) => {
  //  console.log(result);
  //});

  //findOneAndDelete
  //db.collection('Todos').findOneAndDelete({text: 'whatever'}).then((result) => {
  //  console.log(result);
  //});

  //db.collection('Users').deleteMany({name: 'Julio'}).then((result) => {
  //  console.log(result);
  //});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ba1ce8d993a29ad5f91f322")}).then((result) => {
    console.log(result);
  });

  //client.close();
});
