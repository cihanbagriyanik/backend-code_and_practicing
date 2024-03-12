"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
"use strict"

const Purchase = require('../models/purchase')
const Product = require('../models/product')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
        const data=await res.getModelList(Purchase,{},['firm_id','brand_id','product_id'])
        // res.status(200).send({
        //     error: false,
        //     details:await res.getModelListDetails(Purchase),
        //     data  
        // })
        
        //FOR REACT ? 
        res.status(200).send({          
            data  
        })
       
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Purchase' }
            }
        */
        
        // set login user id
        // req.body.user_id=req.user?._id

        const data=await Purchase.create(req.body)       
        const updateProduct=await Product.updateOne({_id:data.product_id}, { $inc : { quantity:+data.quantity } })  

              res.status(201).send({
                error: false,
                data  
        })           

    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */
        const data=await Purchase.findOne({_id:req.params.id}).populate(['firm_id','brand_id','product_id'])
        res.status(200).send({
            error: false,
            data  
        })      
        
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { $ref: '#/definitions/Purchase' }
            }
        */
        // first get curentPurchase
        const curentPurcahse=await Purchase.findOne({_id:req.params.id })
        // calculate diference
        const difquantity=req.body.quantity - curentPurcahse.quantity   

        // update product's cuantity
        const updateProduct=await Product.updateOne({_id:curentPurcahse.product_id}, 
            { $inc : { quantity:difquantity } })


        const data=await Purchase.updateOne({_id:req.params.id},req.body,{ runValidators:true})
    
        res.status(202).send({
                error: false,
                data,
                newdata: await Purchase.findOne({_id:req.params.id})  
        })   
        
    },



    delete: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */
        // first get curentPurchase
        const curentPurcahse=await Purchase.findOne({_id:req.params.id }) 
        
        // delete curentPurchase        
        const data=await Purchase.deleteOne({_id:req.params.id})

        // update product's cuantity
        const updateProduct=await Product.updateOne({_id:curentPurcahse.product_id}, 
            { $inc : { quantity:-curentPurcahse.quantity } })  


        res.status(data.deletedCount ? 204 : 404).send({
                error: false,
                data,                  
        })   
    
    },
}