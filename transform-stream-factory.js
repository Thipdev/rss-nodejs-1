const { cipher } = require('./cipher');

function createSteam(options) {
    return new cipher(options.shift, options.action);
}

module.exports = { createSteam };