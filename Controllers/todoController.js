const User = require('../Models/user')
const data = require('../Models/Todo.js')
const { todo } = require('../Models/Todo.js')
let Todo = data.todo

async function index(req, res) {
  if (req.user) {
    User.findById(req.user._id, (err, u) => {
      res.render('todos/index', { u })
    })
  } else {
    res.redirect('/user')
  }
}

function newTodo(req, res) {
  res.render('todos/new')
}

function create(req, res) {
  if (req.body.done === 'on') {
    req.body.done = true
  } else {
    req.body.done = false
  }
  Todo.create(req.body, (err, td) => {
    if (err) {
      res.status(400).json(err)
      return
    }
    User.findById(req.user._id, (err, u) => {
      u.todos.push(td)
      u.save(err => err)
    })
    res.redirect('/todo')
  })
}

function edit(req, res) {
  User.findById(req.user._id, (err, u) => {
    let td = u.todos.id(req.params.id)
    res.render('todos/edit', { td })
  })
}

function update(req, res) {
  User.findById(req.user._id).then(user => {
    let todo = user.todos.id(req.params.id);
    todo.remove()
    user.todos.push({ title: req.body.title })
    user.save().then((u) => {
    });

  }).then(() => {
    res.redirect('/todo')
  }).catch(err => {
  });
}


function deleteToDo(req, res) {
  User.findById(req.user._id, (err, user) => {
    if (err) {
      res.status(400).json(err)
      return
    }
    user.todos.id(req.params.id).remove()
    user.save(err => err)
    res.redirect('/todo')
  })
}

module.exports = {
  index,
  newTodo,
  create,
  edit,
  update,
  deleteToDo
}