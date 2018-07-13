const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 2));
        geocode.geoWeather(results, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(results, undefined, 2));
            }
        });
    }
});


