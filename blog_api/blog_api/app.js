const express = require("express");
const app = express();
const cors = require("cors")
const AllRoutes = require("./config/AllRoutes");
const Upload = require("express-fileupload");

app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname+"/assets"));

app.use(express.json());

app.use(cors());
app.use(Upload());
app.use(AllRoutes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("server is running with port-", port);
})