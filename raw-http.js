const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=5c68b7ea2ba8518addfb9fbac098ac94&query=';

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error);
})

request.end();