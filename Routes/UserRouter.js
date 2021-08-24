const Router = require('express').Router()
const userModel = require('../Models/userModel')
const bcrypt = require('bcryptjs');

Router.post('/registration', function (req, res) {
   const { name, email, password, confirmPassword } = req.body
   if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
         userModel.findOne({ email: email }, (err, data) => {

            if (!data) {

               const newUser = new userModel({
                  name: name,
                  email: email,
                  password: password,
               })
               newUser.save().then((result) => {
                  res.status(201).json({
                     message: "Registration Success",
                     succ: true,
                     data: result
                  })
               }).catch((err) => {
                  res.status(500).json({
                     message: "Something went wrong",
                     succ: false,
                     error: err,
                  })
               })
            } else {
               res.status(400).json({
                  message: "User Already exits with this mail",
                  succ: false,
                  data: data,
               })
            }
         })
      } else {
         res.status(401).json({
            message: "Password and confrim password dosen't match",
            succ: false,
            messageTwo: "Check your password and try again"
         })
      }

   } else {
      res.status(401).json({
         message: "Invalid Credentials",
         succ: false,
         messageTwo: "Fill all the fields & try again"
      })
   }
})



Router.post('/login', function (req, res) {
   const { email, password } = req.body

   if (email && password) {

      userModel.findOne({ email: email }, (err, data) => {
         if (!data) {
            res.status(400).json({
               message: "No user exits with this mail and password",
               succ: false,
               email: email
            })
         } else {
            bcrypt.compare(password, data.password).then((result) => {

               if (result) {
                  res.status(401).json({
                     message: "Login Success",
                     succ: true,
                     data: data
                  })
               } else {
                  res.status(401).json({
                     message: "Invalid Credentials",
                     succ: false,
                     messageTwo: "Login Failed"
                  })
               }
            }).catch((err) => {
               res.status(500).json({
                  message: "Something went wrong",
                  succ: false,
                  error: err
               })
            })


         }
      })

   } else {
      res.status(401).json({
         message: "Invalid Credentials",
         succ: false,
         messageTwo: "Fill all the fields & try again"
      })
   }
})





module.exports = Router