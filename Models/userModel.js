const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserModelSchema = new mongoose.Schema(
   {
      name: { type: String, },
      email: { type: String, },
      password: { type: String, }
   }
);
UserModelSchema.pre('save', async function (next) {
   if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 12);

   }
   next();
});
module.exports = mongoose.model('UserModel', UserModelSchema);
