const connectToMongo = require('./db')
const express = require('express')


connectToMongo();

const app = express()
const port = 5000

//middleware
app.use(express.json())

//Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));

app.listen(port, () => {
  console.log(`iWarehouse backend listening on port ${port}`)
})