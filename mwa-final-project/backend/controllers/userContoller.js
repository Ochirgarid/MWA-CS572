const path=require("path");
var  mongoose=require("mongoose");
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const User =require('../db/user-model')
const jwt = require("jsonwebtoken");


module.exports.doLogin=async function(req,res) {
   const email =req.body.email;
   const password=req.body.password;
   await User.getUserByEmail(email,(err,user)=>{
       if(err) throw err;
       if(!user){
           return res.json({success:false,message:'user not found'})
       }
       User.comparePassword(password,user.password,(err,isMatch)=>{
           if(err) throw err;
           //if true create token
           if(isMatch){
               const token =jwt.sign({user},process.env.secret,{
                   expiresIn:604800//week then logout
               });
               res.json({
                   success:true,
                   token:'JWT '+token,
                   user:{
                       id:user._id,
                       name:user.name,
                       username:user.username,
                       email:user.email,
                       firstname:user.firstname,
                       phonenumber:user.phonenumber,
                       lastname:user.lastname
                   }
               })
           }
       })
   });
};


module.exports.doSignUP= async function(req,res) {
        let newUser =new User({
            username    : req.body.username,
            firstname   : req.body.firstname,
            lastname    : req.body.lastname,
            email       : req.body.email,
            phonenumber : req.body.phonenumber,
            password    : req.body.password,
        });
        await User.addUser(newUser,(err,user)=>{
            if (err) {
                res.json({success:false,message:'failed to register user'})
            } else {
                res.json({success:true,message:'user created successfully'})
            }
        })
};

module.exports.getProfile=function(req,res,next) {
    res.json({user:req.user})
};


