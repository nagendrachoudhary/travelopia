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
        const {sort}=req.query
        if(sort=='all'){
            const {page} = req.query
            const body =  await data.find().limit(5).skip((page-1)*5)
            let totalPage =await data.find().count()
            totalPage=(Math.ceil(totalPage/5));
            res.send({body,totalPage,page})
        }
        else if(sort=='budget'){
            const {page} = req.query
            const body =  await data.find().limit(5).skip((page-1)*5).sort({[sort]:-1})
            let totalPage =await data.find().count()
            totalPage=(Math.ceil(totalPage/5));
            res.send({body,totalPage,page})
        }
        else if(sort=='date'){
            const {page} = req.query
            const body =  await data.find().limit(5).skip((page-1)*5).sort({createdAt:-1})
            let totalPage =await data.find().count()
            totalPage=(Math.ceil(totalPage/5));
            res.send({body,totalPage,page})
        }
        else{
            const {page} = req.query
            const body =  await data.find().limit(5).skip((page-1)*5).sort({[sort]:1})
            let totalPage =await data.find().count()
            totalPage=(Math.ceil(totalPage/5));
            res.send({body,totalPage,page})
        }

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
module.exports =router