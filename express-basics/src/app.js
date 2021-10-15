const express = require('express');

const app = express();


app.get('', (req, res) => {
    res.send('<h1>Homepage</h1>');
})
app.get('/about', (req, res) => {
    res.send({
        name: 'Abhi',
        age: 25
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