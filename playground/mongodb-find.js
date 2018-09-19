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
  db.collection('Todos').find({
    _id: new ObjectID('5ba1bb40f262f113c15395b8')
    }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  */
  /*
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}.`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  */

  db.collection('Users').find({name: 'Molly'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch users', err);
  });




  //client.close();
});
