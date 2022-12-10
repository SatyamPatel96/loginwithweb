const express=require("express")
const route=require("./route.js")
const mongoose=require("mongoose")
const app=express()
const multer=require("multer")
const cookieparser=require('cookie-parser')

app.use(express.json())
app.use(multer().any())
app.use(cookieparser())

mongoose.connect("mongodb+srv://patelsatyam9827:b76wuy3TFrbOISnL@cluster0.bqjly5l.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser:true})

.then(()=>console.log("MongoDb is Connected"))
.catch(err=>console.log(err))



// app.get("/", function(req, res) {
//     res.send(Quote.getQuote());
//   });



app.use('/',route)

app.listen(process.env.PORT || 3001, function(){
    console.log("express app running on port"+(process.env.PORT || 3001))
})