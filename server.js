const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var routeTache = require('./Routes/Tache')
var routeAddTache = require('./Routes/AddTache')
var routeDeleteTache = require('./Routes/DeleteTache')
var routeUpdateTache = require('./Routes/UpdateTache')
const port = 3000;

// Configuration
app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
}));

app.use(bodyParser.json());

// Setting up the public directory
app.use(express.static('public'))

// Index go to home page 
app.get('/', (req, res) => {
    res.redirect("/vue/index.html")
})

// API'S

app.use(routeTache);
app.use(routeAddTache);
app.use(routeDeleteTache);
app.use(routeUpdateTache);
app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});