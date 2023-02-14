const mongoose = require('mongoose');

const HollywoodDataSchema = new mongoose.Schema({
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

const bollyModel = mongoose.model('hollywoods',HollywoodDataSchema);
module.exports = bollyModel