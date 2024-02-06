"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// ROUTERS:
const router = require("express").Router()

// Import Controller:
const todo = require('../controllers/todo')

// // LIST TODOS:
// router.get('/', todo.list)

// // CRUD PROCESSES ->

// // CREATE TODO
// router.post('/', todo.create)

// // READ TODO:
// router.get('/:id', todo.read)


// // UPDATE TODO:
// router.put('/:id', todo.update)

// // DELETE TODO:
// router.delete('/:id', todo.delete)

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .patch(todo.update)
    .delete(todo.delete)

// Export:
module.exports = router