const expres = require("express");
const app = expres()
const connect = require("./configs/db")

const productControler = require("./controllers/product.controllers")

app.use(expres.json())

app.use("/user",productControler)

app.listen(1234, async function(){
    await connect()
    console.log("listing 1234");
})