const DB = "mongodb+srv://jyoti007:Jyoti%400987@cluster0.xvxkiaa.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(DB, 
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        
          
    }).then(()=>{

    console.log("Connection Successfully")
}).catch((err)=>

    console.log("Something problem...",err));