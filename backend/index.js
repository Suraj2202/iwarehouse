const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')


connectToMongo();

const app = express()
const port = 5000

//middleware
app.use(cors())
app.use(express.json())

//Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));

app.listen(port, () => {
  console.log(`iWarehouse backend listening on port ${port}`)
})