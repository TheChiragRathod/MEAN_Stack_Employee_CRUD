const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const ModelEmp=require("./Model/employee")
const auth=require("./verifyToken")

const router=express.Router()


router.post("/login",async (req,res)=>{

    try
    {
        const user= await ModelEmp.findOne({email:req.body.email})
        if(!user)
        {
            return res.send("<h2>Sorry user does not exist...!!</h2>")
        }

        const isValid = await bcrypt.compare(req.body.password,user.password)

        if(!isValid)
        {
            res.send("Password wrong...")
        }
        else
        {
            const token = jwt.sign({_id:user.id},"privatekey")
            res.header('auth-token',token)
            res.send(token)
        }
    }
    catch(error)
    {
        res.status(404).send(error)
    }
})

router.get("/post",auth,(req,res)=>{
    res.json({
        title:"Engineering",
        decs:"Rk University Gujart"
    })
})

router.get("/emp",async (req,res)=>{

    try
    {
        const employee = await ModelEmp.find();
        return res.send(employee);
    }
    catch(error)
    {
        console.log(error)
        return res.status(404).send(error)
    }

})

router.post("/insemp",async (req,res)=>{

    try
    {
        data=null;
        const salt= await bcrypt.genSalt(10)
        const hashedPswd= await bcrypt.hash(req.body.password,salt)
        const emp=new ModelEmp(
            {
                name:req.body.name,
                email:req.body.email,
                password:hashedPswd,
                city:req.body.city,   
                address:req.body.address
            }
        )
        await emp.save()
        console.log("Done....")
        return res.status(200).send({res:"Success"})
        
    }
    catch(error)
    {
        res.status(404).send(error)
    }


})

router.delete("/delete_emp/:id",async (req,res)=>{

    try
    {
        await ModelEmp.deleteOne({_id:req.params.id})
        return res.status(200).send({res:"Success"})
    }
    catch(error)
    {
        res.status(404).send({error:"Record not found!..."})
    }
})

router.patch("/emp/:id",async (req,res)=>{

    try
    {

        const filter={_id:req.params.id}
        const update={name:req.body.name,email:req.body.email,city:req.body.city,address:req.body.address}
        const emp=await ModelEmp.findOneAndUpdate(filter,update)
      
        return res.status(200).send({error:"Record is updated..."})
    }
    catch(error)
    {
        res.status(404).send({error:"Record not found..."})
    }
})
module.exports=router