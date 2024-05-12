const express = require('express');
const app = express();
app.use(express.json());


/**
 * define middleware
 */
function userMiddleware(req, res, next) {
    if (!(username === "anshika" && password === "pass")) {
        res.status(400).json({ "msg": "Invalid Credentials" });
    } else {
        next();
    }
}

function kidneyrMiddleware(req, res, next) {
    if (kidneyId!= 1 && kidneyId!=2) {
        res.status(400).json({ "msg": "Incorrect Input" });
    } else {
        next();
    }
}

/**
 * call the middleware function
 */
app.get('/health-checkup', userMiddleware,kidneyrMiddleware,(req,res)=>{
    res.send("Your health is healthy");
});
app.get('/kidney-check', userMiddleware,kidneyrMiddleware,(req,res)=>{
    res.send("Your kidney is healthy");
});
app.get('/heart-check', userMiddleware,kidneyrMiddleware,(req,res)=>{
    res.send("Your heart is healthy");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
