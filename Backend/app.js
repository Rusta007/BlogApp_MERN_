const express = require('express')
const mongoose = require('mongoose')
const bolly = require('./Schema/bollywood')
const fits = require('./Schema/fitness')
const food = require('./Schema/food')
const holly = require('./Schema/hollywoods')
const tech = require('./Schema/tech')
const home = require('./Schema/home')

const app = express();

const DB = "mongodb+srv://bones27:1R9eZ9rhSEgkBVYP@cluster1.8nci8af.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(DB, 
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        
          
    }).then(()=>{

    console.log("Connection Successfully")
}).catch((err)=>

    console.log("Something problem...",err));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
    });

app.get("/bolly",function(req,res){
    console.log('read called')

    bolly.find(function(err, data) {
      if(err){
          console.log(err);
      }
      else{
        //   console.log(data)
          res.send(data);
      }
    }); 
  })

app.get("/fits",function(req,res){
console.log('read called')

fits.find(function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
        res.send(data);
    }
}); 
})


app.get("/food",function(req,res){
    console.log('read called')
    
    food.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            console.log(data)
            res.send(data);
        }
    }); 
    })



    app.get("/holly",function(req,res){
        console.log('read called')
        
        holly.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                console.log(data)
                res.send(data);
            }
        }); 
        })
        app.get("/tech",function(req,res){
            console.log('read called')
            
            tech.find(function(err, data) {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data)
                    res.send(data);
                }
            }); 
            })
            app.get("/home",function(req,res){
                console.log('read called')
                
                home.find(function(err, data) {
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(data)
                        res.send(data);
                    }
                }); 
                })

 app.listen(process.env.PORT||5000,()=>{
    console.log("app is running in 5000");
})