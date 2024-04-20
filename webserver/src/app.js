const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//define paths for Express config
//we use this to serve html files instead of app.get method for /help and / page
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

/**
 * to get the index page:
 * app.com/
 * app.comindex.html
 */


/**
 *  to get the help page
 *  app.com/help.html
 * */ 


/**
 * app.com/about
 */
app.get('/about', (req, res) => {
    res.send([{
        name: 'Anshika',
        age: 22
    }, {
        name: 'Ayushi',
        age: 18
    }]);
})


/**
 * app.com/weather
 */
app.get('/weather', (req, res) => {
    res.render('weather', { //write the name as you write the name of .hbs
        title: 'Weather Page',
        description: 'This page is render using the HBS'
    })
})
/**
 * app.com/HbsAbout
 */
app.get('/HbsAbout', (req, res) => {
    res.render('HbsAbout', { //write the name as you write the name of .hbs
        title: 'HbsAbout Page',
        description: 'This page is render using the HBS'
    })
})
/**
 * app.com/HbsHome
 */
app.get('/HbsHome', (req, res) => {
    res.render('HbsHome', { //write the name as you write the name of .hbs
        title: 'HbsHome Page',
        description: 'This page is render using the HBS'
    })
})

//handling errors
app.get('/HbsAbout/*',(req,res)=>{
    res.render('404',{
        title: '404',
        errorMsg: 'HbsAbout article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404', { //write the name as you write the name of .hbs
        title: '404',
        errorMsg: 'This Page is not found'
    })
})

//server listening at port 3000.
app.listen(3000, () => {
    console.log("server is listening at 3000 port");
})