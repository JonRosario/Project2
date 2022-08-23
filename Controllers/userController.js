const User = require('../Models/user')

function index(req, res) {
  res.render('User/index')
}

module.exports = {
  index,
}