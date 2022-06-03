// const { default: mongoose, model } = require("mongoose");
const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('recipe',userschema)