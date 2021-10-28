const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

  email: {
        type: String,
      unique:true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

   dateOfbirth: {
        type: Date,
        required: false
    },

    phonenumber: {
        type: Number,
        required: false
    },
});

const User = mongoose.model('user', userSchema);
module.exports =User;


module.exports.getUserById=function(id,callback){
    User.findById(id,callback)
}

module.exports.getUserByEmail=function(email,callback){
    const query ={email:email}
    User.findOne(query,callback)
}

module.exports.comparePassword=function(candidatPwd,hash,callback){
    bcrypt.compare(candidatPwd,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch)
    })
}
module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback)
        })
    })
}
