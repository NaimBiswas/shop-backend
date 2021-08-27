const productModel = require('../Models/productModel')

const Router = require('express').Router()
Router.post('/add-product', function (req, res) {
   const userId = req.headers['id']
   const { title, imageURL, price, description } = req.body
   if (userId) {
      const newProduct = new productModel({
         userId: userId,
         title: title,
         imageURL: imageURL,
         price: price,
         description: description,
      })
      newProduct.save().then((result) => {
         res.status(201).json({
            message: "Thanks for create a new Product",
            succ: true,
            data: result
         })
      }).catch((err) => {
         res.status(400).json({
            message: "Something happened wrong!",
            succ: false,
            error: err,
         })
      })
   } else {
      res.status(400).json({
         message: "Send user id by headers",
         succ: false,
      })
   }

})




module.exports = Router