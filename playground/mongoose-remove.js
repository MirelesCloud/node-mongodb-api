const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')
/*
Todo.remove({}).then((result) => {
  console.log(result)
})*/

Todo.findOneAndRemove({_id: '5bb3e2ee7de173b6dbbd605b'}).then((todo) => {
  console.log(todo)
})

Todo.findByIdAndRemove('5bb3e2ee7de173b6dbbd605b').then((todo) => {
  console.log(todo)
})
