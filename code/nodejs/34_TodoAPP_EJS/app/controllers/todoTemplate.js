"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// npm i express-async-errors
require('express-async-errors')

const Todo = require('../models/todo')
const priority={
    "1": "High", 
    "0": "Normal", 
    "-1": "Low"
}

module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll()
        
        // res.status(200).send({
        //     error: false,
        //     result: data
        // })

        // data obje olmalı
        res.render('todoList', {data,priority})
    },

    // CRUD METHODS:

    create: async (req, res) => {
        

     //! form daki input name ler model deki ile aynı olmalı
        if(req.method=='GET'){

            res.render('todoCreate')

        }else { // post

            // app.use(express.urlencoded({extended:true} ))

            console.log( " ********** ")
            console.log( req.body)
            const data = await Todo.create(req.body)
            // res.redirect('/view')

        }
        


    },

    read: async (req, res) => {

        // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
        // const data = await Todo.findOne({ where: { id: req.params.id } })
        
        const data = await Todo.findByPk(req.params.id)
        // res.status(200).send({
        //     error: false,
        //     result: data
        // })
        // console.log(data);
        res.render('todoRead', {data:data.dataValues,priority})

    
    },

    update: async (req, res) => {

        // // Model.update({ newData }, { filter })
        // const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })
        // // isUpdated return: [ 1 ] or [ 0 ]
        // res.status(202).send({
        //     error: false,
        //     body: req.body, // Send Data
        //     message: 'Updated',
        //     isUpdated: Boolean(isUpdated[0]),
        //     result: await Todo.findByPk(req.params.id)
        // })

        if(req.method=='GET'){
            const data = await Todo.findByPk(req.params.id)

            res.render('todoUpdate',{data:data.dataValues})

        }else { // post

            // app.use(express.urlencoded({extended:true} ))

            console.log( " ********** ")
            console.log( req.body)
            const data = await Todo.create(req.body)
            // res.redirect('/view')

        }
        
    },

    delete: async (req, res) => {

        // Model.destroy({ filter })
        const isDeleted = await Todo.destroy({ where: { id: req.params.id } })
        // isDeleted return: 1 or 0
        // if (isDeleted) {
        //     res.sendStatus(204)
        // } else {
        //     res.sendStatus(404)
        // }
        // // res.status(204).send({
        // //     error: false,
        // //     message: 'Deleted',
        // //     isDeleted: Boolean(isDeleted)
        // // })

        //redirect yaparken path belirtilir 
        // delete den sonra hangi path e yönlencek ise 
        res.redirect('/view')
    }

}