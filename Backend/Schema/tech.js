const mongoose = require('mongoose');

const TechDataSchema = new mongoose.Schema({
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

const bollyModel = mongoose.model('technologies',TechDataSchema);
module.exports = bollyModel