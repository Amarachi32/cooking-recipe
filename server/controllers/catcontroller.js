require('./../models/conn')

const schemabody = require('./../models/schemadb')

exports.getpost = async(req,res)=>{
    res.render('index')
}