const toDo = require('../Models/user')

function index(req, res) {
  let userSignedIn = false
  if (!userSignedIn) {

  }
  res.render('new')
}

function show(req, res) {

}


module.exports = {
  index,
  show,

}