const User = require('../Models/User')

function index(req, res) {
  res.render('User/index')
}

module.exports = {
  index,
}