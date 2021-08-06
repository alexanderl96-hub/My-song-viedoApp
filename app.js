const cors = require("cors")
const express = require("express")
const songsControllers = require("./controllers/songsControllers")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Tuner")
})

app.use("/songs", songsControllers);

app.get("*", (req, res)=>{
    res.status(404).send("Page not Found");
});

module.exports = app;