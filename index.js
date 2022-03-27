const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const hewanRoute = require('./Router/hewan')
app.use(hewanRoute)

app.listen(port, ()=>{
    console.log(`server is okey ${port}`);
})