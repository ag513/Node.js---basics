const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();

// define paths for express confid
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup directory for static assets
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather page',
        name: 'abhi'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about page',
        name: 'abhinav'
    });
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'this is a help page',
        name: 'abhinav'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Cannot found help articles'
    })
})

app.get('*', (req, res) => {
    // res.send('cannot find the page')
    res.render('404', {
        errorMessage: 'This is 404  page'
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        name: 'Abhi',
        age: 25
    }, {
        name: 'Gunishetty',
        age: 20
    }]);

})

app.listen(3001, () => {
    console.log('server running on port 3001');
})