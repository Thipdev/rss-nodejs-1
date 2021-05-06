const fs = require('fs');

function createSteam(options) {
    return fs.createReadStream(options.input);
}

module.exports = { createSteam };