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
    try{
        const {page} = req.query
        const body =  await data.find().limit(5).skip((page-1)*5)
        let totalPage =await data.find().count()
        totalPage=(Math.ceil(totalPage/5));
        res.send({body,totalPage,page})

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
module.exports =router