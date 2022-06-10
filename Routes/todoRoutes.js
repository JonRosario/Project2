const express = require('express');
const router = express.Router();
const todoCtrl = require('../Controllers/todoController')

router.get('/', todoCtrl.index)

router.get('/new', todoCtrl.newTodo)

router.post('/create', todoCtrl.create)

router.get('/:id/edit', todoCtrl.edit)

router.get('/:id', todoCtrl.show)

router.put('/:id', todoCtrl.update)

router.delete('/:id', todoCtrl.deleteToDo)

module.exports = router