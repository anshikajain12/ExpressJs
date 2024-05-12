const express = require('express');
const app = express();

app.post('/health-checkup',(req,res)=>{
    const kidneys= req.body.kidney;
    const kidneyLength= kidneys.length;
    res.send(`your kidney length is ${kidneyLength}`);
});


/**
 * global catches middleware
 * This is a specialtype of middleware fun in express that has four arguments instead of three(error,req,res,next)
 * express recorgnize it an error-handling middleware because of these four arguments
 */
app.use((error,req,res,next)=>{
    res.status(500).send('Internal server error occured');
})