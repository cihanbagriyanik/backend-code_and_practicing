"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

// Call TODO Controller:
const todoTemplate = require('../controllers/todoTemplate')

// router.route('/')
//     .get(todoTemplate.list) // LIST
//     .post(todoTemplate.create) // CREATE

// router.route('/:id')
//     .get(todoTemplate.read) // READ
//     .put(todoTemplate.update) // UPDATE
//     .delete(todoTemplate.delete) // DELETE


    

router.get('/',todoTemplate.list) // LIST
router.get('/create',todoTemplate.create) // CREATE
router.post('/create',todoTemplate.create) // CREATE

// router.all('/create',todoTemplate.create) // CREATE

router.get('/:id', todoTemplate.read) // READ
router.get('/:id/delete', todoTemplate.delete) // DELETE

router.get('/:id/update', todoTemplate.update) // update
router.post('/:id/update', todoTemplate.update) // update





// router.post(todoTemplate.create) // CREATE
//     .get(todoTemplate.read) // READ
//     .put(todoTemplate.update) // UPDATE


module.exports = router