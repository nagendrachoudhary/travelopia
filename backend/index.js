const express = require('express')
require('dotenv').config();

const app= express();
app.listen(8080,()=>{
    console.log("server start on 8080 port")
})