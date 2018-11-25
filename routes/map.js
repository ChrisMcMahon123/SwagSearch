const express = require('express')
const router = express.Router();
const models = require('../models')
const bodyParser = require('body-parser')

router.use(bodyParser)

router.get('/mapdata', function(req, res){
    
})