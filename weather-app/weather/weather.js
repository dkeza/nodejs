const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request({
        url : `https://api.darksky.net/forecast/5debb2cbfbaa6a3a82a5513bfb855cc2/${latitude},${longitude}?units=si&lang=sr`,
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
    getWeather
}