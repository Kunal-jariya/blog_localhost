const mongoose = require("mongoose");
require("../config/db");

const CategorySchema = mongoose.Schema({
   name : String
})
module.exports = mongoose.model("category",CategorySchema);