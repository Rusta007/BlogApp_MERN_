const mongoose = require('mongoose');

const FitnessDataSchema = new mongoose.Schema({
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

const fit = mongoose.model('fitnesses',FitnessDataSchema);
module.exports = fit