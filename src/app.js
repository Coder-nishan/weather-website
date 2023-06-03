const express = require("express");
const path = require("path");
const hbs= require("hbs");
const weather = require("./utils/weather");

const app= express();

// Define path for express config
const publicDirectoryName = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlers engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryName));

app.get('', (req,res) => {
    res.render('index', {
        name: "Nishan Jain",
        title: "Weather"
    });
})

app.get('/about', (req,res) => {
    res.render('about',{
        name: "Ganesh ji",
        title: "about"
    });
})

app.get('/help', (req,res) => {
    res.render('help', {
        helper: 'Lucifer fromm hell',
        name: "Shelineder lodha",
        title: "help"
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "Please provide the address to get weather updates"
        })
    }
    input=req.query.address;
    console.log(input);
    weather(input, (error, data) => {
        res.send({
            Error: error,
            weather_update: data,
            address: input
        })
    console.log("Error: ", error);
    console.log("Data: ", data);
    })
    
});

app.get('/products', (req,res) => {
    if(!req.query.search){
        return res.send({
            error: "please provide the search query"
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: "GUCCI star",
        title: "404 page",
        body: "Help article not found"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        name: "GUCCI star",
        title: "404 page",
        body: "Page not found"
    })
})
app.listen(3000, () => {
    console.log("Listing at port 3000 at your local machine");
})