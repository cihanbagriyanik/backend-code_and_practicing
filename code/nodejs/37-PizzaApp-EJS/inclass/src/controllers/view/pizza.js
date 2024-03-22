"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Pizza Controller:

const Pizza = require('../../models/pizza')
const Toppings = require('../../models/topping')
const fs = require('fs');

module.exports = {

    list: async (req, res) => {

        const data = await res.getModelList(Pizza, {}, 'toppings')

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Pizza),
        //     data
        // })

        // Add '?' parameters to url if there is not:
        if (!req.originalUrl.includes('?')) req.originalUrl += '?'

        res.render('pizzaList', {
            details: await res.getModelListDetails(Pizza),
            pizzas: data,
            pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, ''),
            user:req.session?.user
        })
    },

    create: async (req, res) => {

        if (req.method == 'POST') {
            if(req.file){
              // set image from filename:
        req.body.image = 'images/' + req.file.originalname
  
            }
            console.log(req.body)

            const data = await Pizza.create(req.body)
    
            // res.status(201).send({
            //     error: false,
            //     data
            // })

            res.redirect('/pizzas/' + data.id)
            // res.redirect("/")

        } else {

            res.render('pizzaForm', {
                pizza: null,
                user:req.session?.user,
                toppings: await res.getModelList(Toppings)
            })
        }
    },

    read: async (req, res) => {

        const data = await Pizza.findOne({ _id: req.params.id }).populate('toppings')

        // res.status(200).send({
        //     error: false,
        //     data
        // })
        
        res.render('pizzaRead', {
            pizza: data,
            user:req.session?.user
        })

    },

    update: async (req, res) => {

        if (req.method == 'POST') {
            if(req.file){
                let resim = req.body.image
                // console.log(resim.split('images/'))
                if(!resim.startsWith("http")){//* gelen resim bilgisinin url olup olmadığını kontrol ettik
                    fs.unlink('./uploads/' + resim.split('images/')[1], err => {
                        // throw new Error(err)
                        console.log(err)
                    })
                }
                // console.log(resim)
                req.body.image = 'images/' + req.file.originalname 
            }

            const data = await Pizza.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
    
            // res.status(202).send({
            //     error: false,
            //     data,
            //     new: await Pizza.findOne({ _id: req.params.id })
            // })

            res.redirect('/pizzas/' + req.params.id)

        } else {

            res.render('pizzaForm', {
                pizza: await Pizza.findOne({ _id: req.params.id }).populate('toppings'),
                user:req.session?.user,
                toppings: await res.getModelList(Toppings)
            })
        }

    },

    delete: async (req, res) => {

        // const data = await Pizza.deleteOne({ _id: req.params.id })
        const data = await Pizza.findOneAndDelete({ _id: req.params.id });
        //* silinen pizzanın resmininde durmasına gerek yok diyerek o resmi kayıtlarımızdan sildik.
        if(!data?.image.startsWith("http")){//* gelen resim bilgisinin url olup olmadığını kontrol ettik
            fs.unlink('./uploads/' + data?.image.split('images/')[1], err => {
                // throw new Error(err)
                console.log(err)
            })
        }
        // console.log(data)
        
        // Go to home:
        res.redirect('/pizzas')

    },

    // Add toppings to Pizza.toppings:
    pushToppings: async (req, res) => {

        const toppings = req.body?.toppings
        
        const data = await Pizza.updateOne({ _id: req.params.id }, { $push: { toppings: toppings } })
        const newData = await Pizza.findOne({ _id: req.params.id }).populate('toppings')

        res.status(202).send({
            error: false,
            data,
            toppingsCount: newData.toppings.length,
            new: newData
        })
    },

    // Remove toppings from Pizza.toppings:
    pullToppings: async (req, res) => {

        const toppings = req.body?.toppings
        
        const data = await Pizza.updateOne({ _id: req.params.id }, { $pull: { toppings: toppings } })
        const newData = await Pizza.findOne({ _id: req.params.id }).populate('toppings')

        res.status(202).send({
            error: false,
            data,
            toppingsCount: newData.toppings.length,
            new: newData
                })
    },
}