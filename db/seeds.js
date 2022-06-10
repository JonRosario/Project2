// const mongoose = require('./')
require('./connection')


const User = require('../models/user')
const { todo } = require('../models/todo')
const todoSeeds = require('./seeds.json')

todo.deleteMany({})
  .then(() => {


    return User.deleteMany({})

      .then(async () => {
        let data = { //form data
          firstName: 'Jonathan',
          lastName: 'Rosario',
          googleId: 'abc123',
          todos: []
        }
        // User.create(data, () => console.log('New user was created!!'))
        let user = await User.create(data)
        return user
      })
      .then((user) => {
        todoSeeds.map(todo => {
          user.todos.push(todo)
        })
        return user.save()
      })
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit()
  })

