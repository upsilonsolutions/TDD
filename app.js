const express = require('express');
const messages = require('./messages')
const app = express();
app.post('/api/1.0/users',(req,res)=>{
    return res.send({message: messages.userCreatedSucessfully});
})
module.exports = app;