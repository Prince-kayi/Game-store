const mongoose=require("mongoose")
const {Schema}=mongoose;

const RegisterSchema= new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    Cnumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    reEnter:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)
module.exports= mongoose.model("register",RegisterSchema)