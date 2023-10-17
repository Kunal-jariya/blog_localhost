const mongoose = require("mongoose");
require("../config/db");

const StudentSchema = mongoose.Schema({
    name : String,
    age : Number
});

module.exports = mongoose.model("student", StudentSchema);