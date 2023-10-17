require("mongoose").connect("mongodb://0.0.0.0:27017/blogs").then(()=>{
console.log("DATABASE CONNECTED")
}).catch((err)=>{
    console.log("ERRRRRRRR----->", err)
})
