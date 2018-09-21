const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')
/*
let id = '5ba5443c7df7c62320c3b29e'


 if (!ObjectID.isValid(id)) {
   console.log('ID not valid');
 }

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos)
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo)
})


Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('Id not found.')
  }
  console.log('Todo by Id', todo)
}).catch((e) => console.log(e));
*/

let id = '5ba3fec45a596773b75c0f9d'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found.')
  }
  console.log('User by Id', user)
}).catch((e) => console.log(e))
