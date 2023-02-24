const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

const routes = require('./routes/route.js');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/api", routes);

app.listen(5000, () => {
    console.log("server started @5000");
})