// import dependencies
const express = require("express");
const cors = require("cors");

//import json
const projects = require("./projects.json");
const about = require("./about.json");

const app = express();

//middleware
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/projects", (req, res) => {
    res.json(projects)
});

app.get("/about", (req, res) => {
    res.json(about)
});

const PORT = process.env.PORT || 4000;
//listner
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

