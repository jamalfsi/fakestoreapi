const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()
const port = process.env.port || 8000
app.use(cors())
// console.log(process.env.port) // remove this after you've confirmed it is working
const {readdirSync} = require("fs")

readdirSync("./routes").map((file) => app.use("/", require(`./routes/${file}`)))


// console.log(readdirSync("./routes"))
// const products = require('./routes/products.js')
// const cart = require('./routes/cart.js')

app.get('/', (req, res) => {
  res.send('Main Page')
})
// app.get('/products',products)
// app.get('/cart', cart)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// console.log("first line")
// console.log("second line")