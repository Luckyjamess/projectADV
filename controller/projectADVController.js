const e = require('express')
const { request, response } = require('express')
const projectADV = require('../model/projecADVModel')
exports.createtable = (request,response) => {
    const { payload } = request.body
    const add = new projectADV({
        user: payload.user,
        email: payload.email,
        password: payload.password
    })
    add.save((error,data) =>{
        if(error) return response.status(400).json({error})
        if(data) return response.status(200).json({data})
    })
}
exports.query = (request,response) => {
    const { payload } = request.body
    projectADV.find({

    })
    .exec((error,data) =>{
        if(error) return response.status(400).json({error})
        if(data) return response.status(200).json({data})
    })
}