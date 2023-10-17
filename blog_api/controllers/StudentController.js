const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", async (req, res)=>{
    let result = await Student.find();
    res.send(result);
})

routes.get("/:id", async (req, res)=>{
    let result = await Student.find({_id : req.params.id});
    res.send({success : true, result : result[0]});
})

routes.post("/", async (req, res)=>{
    delete req.body._id;
    let result =  await Student.create(req.body);
    // console.log(result)
    res.send({success : true, result});
})

routes.put("/:id", async (req, res)=>{
    let result = await Student.findByIdAndUpdate({_id : req.params.id},
        req.body, {new : true} );
    res.send({success : true, result});
})

routes.delete("/:id", async (req, res)=>{
    let result = await Student.findByIdAndDelete({_id : req.params.id});
    console.log(result)
    res.send({success : true, result});

})

module.exports = routes;