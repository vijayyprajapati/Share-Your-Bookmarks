const mongoose = require("mongoose")

const data_schema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    bio: String,

    links: [String],
    social:
    {
        twitter: String,
        linkedin: String
    }

})


module.exports = mongoose.model("data", data_schema)