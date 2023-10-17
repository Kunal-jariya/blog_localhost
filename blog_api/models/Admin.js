const mongoose = require("mongoose");
require("../config/db");

const AdminSchema = mongoose.Schema({
    name : String,
    password : String
})
module.exports = mongoose.model("admin", AdminSchema);