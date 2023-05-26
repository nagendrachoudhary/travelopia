const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const  db = async()=>{mongoose.connect(process.env.database).then(()=>{
    console.log("database connect");
}).catch(()=>{
    console.log("database not connect");
})
}
module.exports = db