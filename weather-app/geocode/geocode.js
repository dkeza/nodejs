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


let geoWeather = (geo, callback) => {
    request({
        url : `https://api.darksky.net/forecast/5debb2cbfbaa6a3a82a5513bfb855cc2/${geo.latitude},${geo.longitude}?units=si&lang=sr`,
        json: true,
        proxy:'http://127.0.0.1:8888'
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (!error && response.statusCode == 200) {
            callback(`Current temp. is ${body.currently.temperature}`);
        } else {
            callback(`Unable to fetch weather`);
        }
    });
}


module.exports = {
    geoAddress,
    geoWeather
}