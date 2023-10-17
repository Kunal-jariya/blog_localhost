const routes = require("express").Router();
const AdminGroup = require("../models/AdminGroup");

routes.get("/", async (req, res)=>{
let result = await AdminGroup.find();
res.send(result);
})

module.exports = routes;