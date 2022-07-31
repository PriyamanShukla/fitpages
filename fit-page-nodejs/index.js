const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const Product = require('./model/ProductSchema');

mongoose.connect("mongodb+srv://priyanka:wf4dmuGHMvr0Zazu@cluster0.62tgnl7.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>
    console.log("connection is successful"))


const port =  4000;
app.use(cors());


app.get('/',(req,res)=>{ 
    res.send("hello world")
})

app.get('/data',(req,res) =>{

    const data = Product.find().then((data) =>{
        res.json(data);
      }).catch((err)=>{
        return res.json({message:"ERROR "});
      })
})

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


