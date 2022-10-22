const express = require("express")
const { get_all, get, add, update, update_link, del } = require("../controllers/data")
const route = express.Router()

// get all
route.get("/", get_all)

// get one data
route.get("/:username", get)

// create data 
route.post("/", add)

// update data
route.put("/:username", update)

// update link
route.put("/link/:username", update_link)

// delete data 
route.delete("/:username", del)

module.exports = route