const request = require('request');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

request({
    url : 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true,
    proxy:'http://127.0.0.1:8888'
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});