const mongoose = require('mongoose');

const ImageUploadModelSchema = new mongoose.Schema(
   {
      image: { type: String },
      title: { type: String },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('ImageUploadModel', ImageUploadModelSchema);
