const mongoose = require("mongoose");
require("../config/db");

const AdminGroupSchem = mongoose.Schema({
    name : String,
    password : String,
})

module.exports = mongoose.model("admingroup", AdminGroupSchem);