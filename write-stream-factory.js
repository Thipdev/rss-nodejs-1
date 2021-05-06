const fs = require('fs');

function createSteam(options) {
    return fs.createWriteStream(options.output, { flags: 'a' });
}

module.exports = { createSteam };