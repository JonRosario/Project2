
const data = require('../Models/todo.js')
let todo = data.todo

async function index(req, res) {
  todo.find({}, (err, td) => {
    res.render('todos/index', { td })
  })
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
  todo.create(req.body, (err, td) => {
    if (err) {
      res.status(400).json(err)
      return
    }
    res.redirect('/todo')
  })
}

function edit(req, res) {
  console.log(req.params.id)
  todo.findOne({ _id: req.params.id }, (err, td) => {
    console.log(td)
    res.render('todos/edit', { td })
  })
}


function show(req, res) {
  let td = todo.findOne({ _id: req.params.id })
  res.json(td)
}


function update(req, res) {
  todo.findByIdAndUpdate(req.params.id, req.body,
    { new: true }, (err, td) => {
      if (err) {
        res.status(400).json(err)
        return
      }
      res.redirect('/todo')
    })
}

function deleteToDo(req, res) {
  todo.findByIdAndDelete(req.params.id, (err, td) => {
    if (err) {
      res.status(400).json(err)
      return
    }
    res.redirect('/todo')
  })
}

module.exports = {
  index,
  newTodo,
  create,
  edit,
  show,
  update,
  deleteToDo
}