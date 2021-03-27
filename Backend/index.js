const express=require('express')
const mongoose = require('mongoose')
const route = require("./route")
const bodyParser= require("body-parser")
const cors=require('cors')

                                    //give database name here...
mongoose.connect("mongodb://localhost:27017/Employee",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>
    {
        const app=express();
        app.use(cors())
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(express.json())
        app.use("",route)
        

        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server started!...")
        })
    }
)