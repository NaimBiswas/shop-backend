const Router = require('express').Router()
const userModel = require('../Models/userModel')


Router.post('/registration', function (req, res) {
   const { name, email, password, confirmPassword } = req.body
   if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
         userModel.findOne({ email: email }, (err, data) => {
            if (data.length === 0) {
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
   res.send('POST request to the homepage')
})





module.exports = Router