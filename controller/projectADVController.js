const e = require('express')
const { request, response } = require('express')
const projectADV = require('../model/projecADVModel')
const likeADV = require('../model/likeADVModel')
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

exports.addLike = (request,response) => {
    const { payload } = request.body
    console.log("ADD LIKE : "+payload)
    likeADV.findOne({ imageUrl: payload }, function (err, data) {
        if (err){
            return response.status(400).json({ err })
        }else if (data){
            data.likeNum = data.likeNum + 1;
            data.save((error, data) => {
                if (error) return response.status(400).json({ error })
                if (data) return response.status(200).json({ data })
            })
        }else{
            const add = new likeADV({
                imageUrl: payload,
                likeNum: 1
            })
            add.save((error, data) => {
                if (error) return response.status(400).json({ error })
                if (data) return response.status(200).json({ data })
            })
        }
    });
}

exports.getLike = (request, response) => {
    const { payload } = request.body
    console.log("GET LIKE : " + payload)
    likeADV.findOne({ imageUrl: payload }, function (err, data) {
        if (err) {
            return response.status(400).json({ err })
        } else if (data) {
            console.log("GET DATAAAAAAAAAAAAAAAAA :::: "+data)
            return response.status(200).json({ data })
        } else {
            return response.status(200).json({data:'no'})
        }
    });
    //return response.status(200).json({data:'yes'})
}

exports.test=(request, response) => {
    return response.status(200).json({data:'yes'})
}