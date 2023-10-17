require("../config/db");
const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    bloggerid : mongoose.Schema.Types.ObjectId,
    title : String,
    details : String,
    category : String,
    date : {type : Date, default : Date.now},
    image : String,
    type : String

})
module.exports = mongoose.model("blog", BlogSchema);