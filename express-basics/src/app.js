const express = require('express');

const app = express();


app.get('', (req, res) => {
    res.send('Homepage');
})
app.get('/about', (req, res) => {
    res.send('This is about page');
})
app.get('/weather', (req, res) => {
    res.send('This is weather page');
})

app.listen(3001, () => {
    console.log('server running on port 3001');
})