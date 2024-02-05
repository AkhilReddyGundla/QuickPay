<<<<<<< HEAD
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
=======
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://akhilreddygundla:Akhil%40_06@cluster0.1rlofxa.mongodb.net/PayTM?retryWrites=true&w=majority');
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        trim:true,
        minLength : 2,
        maxLength : 50,
    },
    password : {
        type : String,
        required : true,
        trim:true,
        minLength :2,
        maxLength : 100
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 20
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 20
    }
})

const bankSchema = mongoose.Schema({
<<<<<<< HEAD
    username :{
        type : String,
        ref : "User",
        required : true 
    },
=======
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})


const User = mongoose.model("User",userSchema);
const Accounts = mongoose.model("Accounts",bankSchema)
module.exports = {
    User,Accounts
}