const express = require('express');
const app = express();

app.get('/health-checkup', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyid;

    if (!(username === "anshika" && password === "pass")) {
        res.status(400).json({ "msg": "Invalid Credentials" });
    } else if (kidneyId === "1" || kidneyId === "2") {
        res.json({
            msg: "Your kidney is fine!"
        });
    } else {
        res.status(400).json({ "msg": "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
