const fs = require('fs');

function createSteam(options) {
    if(!options.output) {
        return process.stdout;
    }
    
    return fs.createWriteStream(options.output, { flags: 'a' });
}

module.exports = { createSteam };