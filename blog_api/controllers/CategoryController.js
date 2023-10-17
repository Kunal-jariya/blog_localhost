const routes = require("express").Router();
const Category = require("../models/Category");
const Blog = require("../models/Blog");

routes.get("/",async (req, res)=>{
    let result = await Category.find();
    res.send(result);
})

routes.get("/:id",async(req, res) =>{
    let id = req.params.id;
    let result = await Category.find({_id :id});
    res.send(result[0]);
})

routes.post("/", async (req, res)=>{
   let result = await Category.create(req.body);
   console.log(result)
    res.send({success: true, result : result});
})

routes.delete("/:id", async (req, res)=>{
    let id = req.params.id;
    
    let result = await Category.find({_id : id});
    //  console.log(result);
    let catename = result[0].name;
    await Blog.deleteMany({category : catename});

    await Category.deleteMany({_id : id});
    res.send({success : true});
})

routes.put("/:id", async (req, res)=>{
    let id = req.params.id;

    let result = await Category.find({_id : id});
    // console.log(result);return
    let catename = result[0].name;
    await Blog.updateMany({Category : catename}, {Category : req.body.name});

    await Category.updateMany({_id : id}, req.body);
    res.send({success : true});
})

module.exports = routes;