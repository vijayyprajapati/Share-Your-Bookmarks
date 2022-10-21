const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const data_route = require("./routes/data")

const PORT = process.env.PORT || 3000

// connect function for connection with mongoDB 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Connected to database !")
    } catch (error) {
        throw error
    }
}

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// adding routes
app.use(data_route)


app.listen(PORT, () => {
    connect()
    console.log("Server started !")
})