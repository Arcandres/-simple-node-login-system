const mongoose = require('mongoose'),
   validator = require('mongoose-unique-validator');

const User = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   username: {
      type: String,
      unique: true,
      required: true
   },
   email: {
      type: String,
      unique: true,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   img: {
      type: String
   }
});

User.methods.toJSON = function () {
   const obj = this.toObject();
   delete obj.password;

   return obj;
}

User.plugin(validator, {message: 'The {PATH} is not available'})

module.exports = mongoose.model('User', User);