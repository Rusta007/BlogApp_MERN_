const mongoose = require('mongoose');

const BollywoodDataSchema = new mongoose.Schema({
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

const bollyModel = mongoose.model('dummy',BollywoodDataSchema,'dummies');
module.exports = bollyModel