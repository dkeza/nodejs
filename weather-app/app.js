const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geoAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}`);
            }
        });
    }
});


