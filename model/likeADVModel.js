const { Int32 } = require('bson')
const { Double } = require('bson')
const mongoose = require('mongoose')

const likeADVSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: true
        },
        likeNum:{
            type: Number,
            default: 0
        }
    }
)
module.exports = mongoose.model('likeADV',likeADVSchema)