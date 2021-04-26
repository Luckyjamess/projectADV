const { Int32 } = require('bson')
const { Double } = require('bson')
const mongoose = require('mongoose')
const projectADVSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model('projectADV',projectADVSchema)


