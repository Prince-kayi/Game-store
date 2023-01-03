const express=require("express")
const router=express.Router()
const Login = require("../routes/Models/Login")
const Register=require("../routes/Models/Register")

router.post("/signin",(req,res)=>{
    const login = new Login({
       email:req.body.email,
       password:req.body.password 
    })
    login.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
});

router.post("/signup",(req,res)=>{
    const register= new Register({
    firstName: req.body.firstName,
    lastName:req.body.lastName,
    Cnumber:req.body.Cnumber,
    password:req.body.password,
    email:req.body.email,
    reEnter:req.body.reEnter
    })
    register.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})
router.get('/list', async (req, res) => {
    let results = await Login.find({});
    res.write("EMAIL, PASSWORD");
    
    res.end();
 });

module.exports=router;