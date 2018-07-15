const yargs = require('yargs');
const axios = require('axios');
//const config = { proxy: { host: 'http://127.0.0.1', port: 8888 } };
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/5debb2cbfbaa6a3a82a5513bfb855cc2/${lat},${lng}?units=si&lang=sr`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then( (response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API server');
    } else {
        console.log(e.message);
    }
}));