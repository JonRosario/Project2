const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { todoSchema } = require('./Todo')

const userSchema = new Schema({
  googleId: String,
  todos: [todoSchema]
})

module.exports = mongoose.model('User', userSchema)