const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
//we use this to serve html files instead of app.get method for /help and / page
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

//app.com
// app.get('', (req, res) => {
//     res.send('Hello express!');
// })

// app.com/hep
// app.get('/help', (req, res) => {
//     res.send('<h1>Help page</h1>');
// })

//app.com/about
app.get('/about', (req, res) => {
    res.send([{
        name: 'Anshika',
        age: 22
    }, {
        name: 'Ayushi',
        age: 18
    }]);
})
//app.com/weather
// app.get('/weather', (req, res) => {
//     res.send('Weather Page');
// })
app.get('/weather', (req, res) => {
    res.render('index', {
        title: 'Weather Page',
        description: 'This page is render using the HBS'
    })
})

app.listen(3000, () => {
    console.log("server is listening at 3000 port");
})