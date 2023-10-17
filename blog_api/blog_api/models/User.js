const mongoose = require("mongoose");
require("../config/db");

const userSchema = mongoose.Schema({
    fullname : String,
    username : String,
    password : String,
    contact : String,
    city : String,
    state : String,
    address : String,
    gender : String
});
module.exports = mongoose.model("user", userSchema);