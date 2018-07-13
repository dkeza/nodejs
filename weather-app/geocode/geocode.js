const request = require('request');

let geoAddress = (address) => {
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true,
        proxy:'http://127.0.0.1:8888'
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            console.log(`Cann't connect to server`);
        } else if (body.status==="ZERO_RESULTS") {
            console.log(`No address found`);
        } else if (body.status==="OK") {
            console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            console.log(`Lng: ${body.results[0].geometry.location.lng}`);
        }  else {
            console.log(`Unknown error`);
        }
        
    });
}

module.exports = {
    geoAddress
}