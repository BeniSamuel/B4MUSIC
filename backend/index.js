const express=require('express');
const dotenv=require('dotenv');
const events=require('events')
const app=express();
dotenv.config();
events.EventEmitter.defaultMaxListeners = 10;
app.use(express.json());
require('./startup/db')()
require('./startup/apis')(app)

const port=process.env.port || 1234
const server=app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
module.exports=server;