const express = require('express')

const {getpost} = require('./../controllers/catcontroller')
const route = express.Router()
route.get(('/'), getpost)

module.exports = route
