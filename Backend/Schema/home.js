const mongoose = require('mongoose');

const HomeDataSchema = new mongoose.Schema({
   id :{
    type : String
   },
   title :{
    type : String
   }
   ,
   Image :{
    type : String
   },
   category :{
    type : String
   },
   description :{
    type : String
   }
})

const bollyModel = mongoose.model('homes',HomeDataSchema);
module.exports = bollyModel