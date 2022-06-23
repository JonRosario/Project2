const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { todoSchema } = require('./Todo')

const userSchema = new Schema({
  googleId: String,
  todos: [todoSchema]
})
let User = mongoose.model('User', userSchema)

module.exports = User