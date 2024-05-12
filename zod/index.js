const express = require('express');
const zod = require('zod');
const app = express();

// const schema = zod.array(zod.number());

/**
 * email:string
 * password: atleast 8 letters
 * country: "IN", "US"
 */

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(5),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number()),
    id: zod.number(),
})
app.use(express.json());

/**
 * http://localhost:3000/health-checkup/
 * pass in a body section
 * {
    "email":"abc@gmail.com",
    "password":"12345678",
    "country":"IN",
    "kidneys":[1,2],
    "id":2
}
 */
app.post('/health-checkup', (req, res) => {
    const schemaBody = req.body;
    console.log(req.body)
    const response = schema.safeParse(schemaBody);
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({ response })
    }
});

app.listen(3000);