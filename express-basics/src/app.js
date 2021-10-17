const path = require('path');
const express = require('express');



const app = express();
//const publicDirPath = path.join(__dirname, '../public');


app.set('view engine', 'hbs')
//app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        weather: 'weather-test'
    });
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