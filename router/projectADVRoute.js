const { Router } = require('express')
const express = require('express')
const { createtable,query } = require('../controller/projectADVController')
const router = express.Router()
router.post('/registed',createtable)
router.get('/query',query)


module.exports = router