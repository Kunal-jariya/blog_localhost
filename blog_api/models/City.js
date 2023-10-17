const mongoose = require("mongoose");
require("../config/db");

const citySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
});

module.exports = mongoose.model("city", citySchema);