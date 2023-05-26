const express = require('express')
require('dotenv').config();
const cors = require('cors');
const db = require('./db');
const router = require('./controller/data.routes');
const app= express();
app.use(cors());
app.use(express.json())
app.use('/',router)
app.listen(8080,()=>{
    db()
    console.log("server start on 8080 port")
})