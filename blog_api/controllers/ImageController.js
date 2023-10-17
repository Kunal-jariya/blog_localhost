const routes = require("express").Router();
const path = require("path");

routes.post("/", async(req, res)=>{

    // console.log('----------',req.body)
    // console.log("111111111111111111",req.files)

    let filedata = req.files.image;

    filedata.mv(path.resolve()+"/assets/images/"+filedata.name, (err)=>{
        if (err){
            console.log(err)
        }
        console.log("**** UPLOADED")
        res.send({success : true});
    })

})
module.exports = routes;