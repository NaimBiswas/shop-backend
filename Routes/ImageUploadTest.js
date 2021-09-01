const Router = require('express').Router()
const imageUploadModel = require('../Models/imageUploadModel')

Router.post('/image', function (req, res) {
   const { image, title } = req.body

   if (image && title) {
      const newUpload = new imageUploadModel({
         image: image,
         title: title,
      })

      newUpload.save().then((result) => {
         res.status(201).json({
            message: "Image Thanks for add a place",
            succ: true,
            data: result,
         })
      }).catch((err) => {
         res.status(500).json({
            message: "Fill all those and try again",
            succ: false,
            error: err,
         })
      })
   } else {
      res.status(401).json({
         message: "Fill all those and try again",
         succ: false,
      })
   }
})




module.exports = Router