const fs = require('fs');

function createSteam(options) {
    if(!options.input) {
        return process.stdin;
    }
    
    return fs.createReadStream(options.input);
}

module.exports = { createSteam };