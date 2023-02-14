const mongoose = require('mongoose');

const FoodDataSchema = new mongoose.Schema({
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

const bollyModel = mongoose.model('foods',FoodDataSchema,'foods');
module.exports = bollyModel