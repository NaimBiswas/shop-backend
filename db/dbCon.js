const mongoose = require('mongoose');

const DB_LINK = "mongodb+srv://admin:admin@cluster0.yq4zj.mongodb.net/shopApp?retryWrites=true&w=majority"
// Connect MongoDB at default port 27017.

mongoose.connect(DB_LINK, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
}, (err) => {
   if (!err) {
      console.log('MongoDB Connection Succeeded.....')
   } else {
      console.log('Error in DB connection: ' + err)
   }
});
