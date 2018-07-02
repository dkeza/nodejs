console.log('Starting app.');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFileSync('greeting.txt', 'Hello '+user.username);