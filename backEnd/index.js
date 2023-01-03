const express=require("express")
const back=express(); 
const mongoose= require("mongoose")
const cors=require("cors")
const Urls= require("./routes/Routes")


back.use(cors())
back.use(express.json());

mongoose.connect("mongodb+srv://Gamestore:games1234@cluster0.3pqwdtt.mongodb.net/GameStore",
    () => console.log("Database connected"))

back.use("/pie",Urls)
back.listen(2000,()=>console.log("Api server is running"))



