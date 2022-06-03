const express = require('express')
const dotenv = require('dotenv')
// const ejs = require('ejs')
dotenv.config()
// const expresslayout = require('express-ejs-layout')
//  require('././server/models/conn')
port = process.env.PORT || 3000
const app = express()
const Router = require('././server/routes/catroute')
const expresslayout = require('express-layout')
app.use('/', Router)

app.use(express.static('public'))
app.use(expresslayout)
app.use(express.json())
// app.use(express.urlencoded({extenden:true}))
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')

// app.get('/', (req,res)=>{
//     console.log('hello')
//     res.send('hello world')
// })

app.listen(port, ()=>{
    console.log('server is on')
})
// require('dotenv').config()
// console.log(process.env) /
// require('./views/layouts/main')