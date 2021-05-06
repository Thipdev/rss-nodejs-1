const fs = require('fs');
const path = require('path');

function createSteam(options) {
    if(!options.input) {
        return process.stdin;
    }
    
    return fs.createReadStream(path.join(__dirname, options.input));
}

module.exports = { createSteam };