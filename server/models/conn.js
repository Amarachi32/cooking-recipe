// const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const { db } = require('./schemadb')
dotenv.config()
const url = process.env.DATABASE
mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('connected')
})
// const db = mongoose.connection
// db.on('error',console.error.bind(console, 'connecton error:'))
// db.once('open',function(){
//     console.log('connect')
// })
require('./schemadb') 
