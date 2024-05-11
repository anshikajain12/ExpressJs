const express = require('express');
const app = express();
const user = [{
    name: 'john',
    kidneys: [{
        healthy: false
    }]
}];
app.use(express.json());

/**
 * to send the request using query:
 * localhost:3000/sum/?n=10
 * http://localhost:3000/sum/?n=10&m=20
 */
app.get("/sum", (req, res) => {
    const n = parseInt(req.query.n); // Parse n to an integer
    const m = parseInt(req.query.m); // Parse m to an integer
    const sum = n + m; // Calculate the sum
    res.send("sum is: " + sum); // Concatenate the string and send it as the response
});

/**
 * to send the request
 * http://localhost:3000/
 */
app.get('/', (req, res) => {
    const johnKidney = user[0].kidneys;
    const numberOfKidney = johnKidney.length;
    const healthyKidney = johnKidney.filter(value => {
        if (value.healthy == true) {
            return value;
        }
    })
    const numberOfHealthyKidney = healthyKidney.length;
    const unHealthyKidney = johnKidney.filter(value => {
        if (value.healthy == false) {
            return value;
        }
    })
    const numberOfUnHealthyKidney = unHealthyKidney.length;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnHealthyKidney
    });
})

/**
 * to post the request using postman:
 * http://localhost:3000/
 * add body in the postman body
 * {
 *  "isHealthy":true
 * }
 */
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!!"
    })
})

/**
 * update the unhealthy kidney into healthy kidney
 * http://localhost:3000/ add the {"isHealthy":true } in the body section of postman
 */
app.put('/', (req, res) => {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Update Done,!!"
    })
})

/**
 * delete the unhealthy kidney
 * http://localhost:3000/ no need to add any data in the body section of postman
 */
app.delete('/', (req, res) => {

    if (checkBadKidneys()) {
        const newKidney = user[0].kidneys.filter(healthyKidney => {
            if (healthyKidney.healthy == true) {
                return healthyKidney
            }
        })
        user[0].kidneys = newKidney;
        res.json({
            msg: "Delete Successfully!!"
        })
    } else {
        res.status(411).json({
            msg: "you have no unhealthy kidneys"
        });
    }
})

function checkBadKidneys() {
    let atleastOneUnhealhtyKidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealhtyKidney = true;
        }
    }   
    return atleastOneUnhealhtyKidney;
}
/**
 * app.listen is used to listen the request
 * 
 */
app.listen(3000, () => {
    console.log("Server is listening at port 3000")
})