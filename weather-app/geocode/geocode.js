const request = require('request');

let geoAddress = (address, callback) => {
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true,
        proxy:'http://127.0.0.1:8888'
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            callback(`Cann't connect to server`);
        } else if (body.status==="ZERO_RESULTS") {
            callback(`No address found`);
        } else if (body.status==="OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }  else {
            callback(`Unknown error`);
        }
        
    });
}

module.exports = {
    geoAddress
}