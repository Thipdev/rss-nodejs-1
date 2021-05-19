const { Transform } = require('stream');
const cipherAction = require('./cipher-action');

class cipher extends Transform {
    constructor(shift, action) {
        super();
        this._strategy = new cipherAction(shift, action);
    }

    _transform(chunk, encoding, callback) {
        let arr = [];
        for(const char of chunk) {
            arr.push(this._strategy.action(char));
        }
        callback(null, Buffer.from(arr));
    }
}

module.exports = { cipher };