const routes = require("express").Router();
const Blog = require("../models/Blog");
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");
const path = require("path");
const uniquestr = require("unique-string-generator");



routes.post("/", async (req, res)=>{  //console.log(req.files); return for check file mimetype
    // console.log(req.headers);
    // console.log('-----',req.body)

    let uniquename = uniquestr.UniqueString();
 
    let token = req.headers.authorization;
    let obj = jwt.decode(token, key);
    // console.log(obj)
    let id = obj._id;

    
    //  console.log(req.files)
    // console.log(JSON.parse(req.body.formdata))
    let data = JSON.parse(req.body.formdata);
    let file = req.files.image;
    let type = req.files.image.mimetype;
    let arr = type.split("/");

    let oldname = file.name;
    let namearr = oldname.split(".");
    let ext = namearr[namearr.length-1];
    let newName = uniquename+"."+ext;

    if(arr[0]== "video"){
        data.type = "video"
    }if(arr[0]== "image"){
        data.type = "image"
    }
    // console.log(data)

    file.mv(path.resolve()+"/assets/blog-data/"+newName, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log("********", data)
        data.image = newName;
        data.bloggerid = id;
        // console.log(data);return;
        await Blog.create(data);
        res.send({success : true});
    });
    
   


   
})

routes.get("/", async (req, res)=>{
    let result = await Blog.find();
    res.send(result);
})
routes.get("/user", async (req, res)=>{
    if(req.headers.authorization){
        // let id=req.params.a;
        let token = req.headers.authorization
        let obj = jwt.decode(token, key)
        console.log(obj);
        let id = obj._id
        let result=await Blog.find({bloggerid:id});
        res.send(result)
    }else{
        res.send({success:false});

    }
})

// routes.get("/user", async (req, res) =>{
//     let token = req.headers.authorization;
//     let obj = jwt.decode(token, key);
//     let id = obj.id;
//     let result = await Blog.find({bloggerid : id});
//     res.send(result);
// })

routes.delete("/user/:id", async (req, res)=>{
    if (req.headers.authorization){
        let id = req.params.id;
    await Blog.deleteMany({_id : id});
    res.send({success : true});
    }else{
        res.send({success : false})
    }
})

routes.get("/:a", async (req, res)=>{
    let result = await Blog.find({category : req.params.a});
    // console.log(result);
     res.send(result);
})

module.exports = routes;