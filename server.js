const express = require('express');
const app = express();
const Routes = require('./Routes')


app.use(express.json())
app.use(Routes);
app.listen(3001,(req,res)=>{
    console.log("Running in the port: 3001")
})