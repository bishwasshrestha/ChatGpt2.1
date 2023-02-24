const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const openai = require('./Routes/apiRoute')

var corsOptions = {  
  origin:"*",  
  optionsSuccessStatus:200    
}

// app.get('/v1/openai/', cors(corsOptions), openai)

app.use('/openai', cors(corsOptions), openai)

const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`server listening to port ${PORT}`))