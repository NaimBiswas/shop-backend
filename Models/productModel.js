const mongoose = require('mongoose');

const ProductModelSchema = new mongoose.Schema(
   {
      title: { type: String },
      imageURL: { type: String },
      price: { type: String },
      desciption: { type: String },
      userId: mongoose.Schema.Types.ObjectId
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('ProductModel', ProductModelSchema);
