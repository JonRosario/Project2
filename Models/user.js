const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { todoSchema } = require('./todo')


const userSchema = new Schema({
  firstName: String,
  lastName: String,
  googleId: String,
  todos: [todoSchema]
})

module.exports = mongoose.model('User', userSchema)