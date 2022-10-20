const Data = require("../models/data")

const get_all = async (req, res) => {
    try {
        let data = await Data.find()
        res.send(data)
    } catch (error) {
        res.status(400).send({
            message: "Something Went Wrong!",
        })
    }

}

const get = async (req, res) => {
    try {
        let data = await Data.findOne({ username: req.params.username })
        res.send(data)
    } catch (error) {
        res.status(400).send({
            message: "Something Went Wrong!",
        })
    }

}


const add = async (req, res) => {
    try {
        let data = new Data(req.body)
        await data.save()
        res.send({
            message: "Data Added !",
        })
    } catch (err) {
        res.status(400).send({
            message: "Something Went Wrong!",
            error: err
        })
    }
}

const update = async (req, res) => {
    try {
        await Data.findOneAndUpdate({ username: req.params.username }, req.body)
        res.send({
            message: "Data Updated !",
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Something Went Wrong!",
        })
    }

}

const update_link = async (req, res) => {
    try {
        await Data.findOneAndUpdate({ username: req.params.username }, { $push: { links: req.body.links } })
        res.send({
            message: "Data Updated !",
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Something Went Wrong!",
        })
    }

}

const del = async (req, res) => {
    try {
        await Data.findOneAndDelete({ username: req.params.username })
        res.send({
            message: "Data Deleted !",
        })
    } catch (error) {
        res.status(400).send({
            message: "Something Went Wrong!",
        })
    }

}

module.exports = { get_all, get, add, update, update_link, del }