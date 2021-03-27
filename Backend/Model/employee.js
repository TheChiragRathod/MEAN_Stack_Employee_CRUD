const mongoose=require('mongoose')

const schema = mongoose.Schema(
    {
        name:
        {
            type:String,
            require:true,
            minlength:3
        },
        email:
        {
            type:String,
            require:true,
            minlength:5
        },
        password:
        {
            type:String,
            minlength:3,
            require:true
        },
        city:
        {
            type:String,
            require:true,
            minlength:2
        },
    
        address:
        {
            type:String,
            require:true,
            minlength:2
        }
    },
    {
        timestamps:true
    }
)                            //give collection name...
module.exports = mongoose.model("colemps",schema)

/*
    Example Data in JSON

{
    "name":"Krish",
    "email":"krish@gmail.com",
    "city":"Delhi",
    "address":
    {
        "add1":"Mahuva",
        "add2":"364290"
    },
    "hobby":["Cricket","Chess"]
    
}

*/