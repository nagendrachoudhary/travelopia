const express = require('express');
const data = require('../model/savedata');
const router = express.Router()
// routes
router.post('/', async(req, res) => {
    try{
        const body = req.body;
        await data.create(body)
        res.send("ok")
    
    }catch(error) {
        res.status(500).send(error);
    }
    
})
router.get('/', async(req, res) => {
    res.send("done")
})
module.exports =router