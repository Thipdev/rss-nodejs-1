const fs = require('fs');
const path = require('path');

function createSteam(options) {
    if(!options.output) {
        return process.stdout;
    }
    
    return fs.createWriteStream(path.join(__dirname, options.output), { flags: 'a' });
}

module.exports = { createSteam };