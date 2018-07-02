console.log('Starting app.');

const fs = require('fs');

fs.appendFileSync('greeting.txt', 'Hello world');