const express = require("express");
const connect = require("./configs/db")
const userController = require("./controllers/user.controllers");

const app = express();

// middleware
app.use(express.json())


app.use("/users",userController)

app.listen(2345, async function (){
    await connect()
    console.log("server runing on 2345");
});