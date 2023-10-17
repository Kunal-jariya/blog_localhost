const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");

// localhost:8080/api/user/auth
routes.post("/", async (req, res)=>{
    let e = req.body.username      //kunal@gmail.com
    let p = req.body.password  //Abc123
    let result = await User.find({username : e});
    if (result.length > 0){ // if username/email is correct

        if (result[0].password == sha1(p)){ // if username/email & password both are correct
            let obj = {_id : result[0]._id};
            let token = jwt.sign(obj, key, {expiresIn : '2d'});
            res.send({success : true, token : token, name : result[0].fullname} );
            
        }else{
            res.send({success : false, errType : 2});
        }
    }else{
        res.send({success : false, errType : 1});
    }
})
module.exports =routes;