const express = require('express')
const projectADV = require('./router/projectADVRoute')
const env = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors') 
app.use(cors())  
app.use((req, res, next) => {     let ALLOW_ORIGIN = ['domain-a.com', 'domain-b.com', 'domain-c.com']     
    let ORIGIN = req.headers.origin        
    if (ALLOW_ORIGIN.includes(ORIGIN)) {          
        res.header('Access-Control-Allow-Origin', ORIGIN)        }        
        res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')        
        res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')        
        return next()     })
env.config()
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qgh9i.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,      
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('connet db');
})
app.use(express.json())
app.use('/api',projectADV)
app.listen(process.env.PORT,() =>{
    console.log('server running ...', process.env.PORT);
})