//inernModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const internSchema = new Schema({

      firstName:{
        type: String,
        required: true
      },
      lastName:{
        type: String,
        required: true
      },
      email:{
        type: String,
        required: true
      },
      phone:{
        type: String,
        required: true
      },
      about:{
        type: String,
        required: true
      }
})

module.exports = mongoose.model('intern', internSchema)
