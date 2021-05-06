const { options } = require('./args');
const validator = require('./args-validator');
const { pipeline } = require('stream');
const transformSteamFactory = require('./transform-stream-factory');
const readStreamFactory = require('./read-stream-factory');
const writeStreamFactory = require('./write-stream-factory');

if(!validator.validate(options)) {
    return 1;
}

pipeline(
    readStreamFactory.createSteam(options),
    transformSteamFactory.createSteam(options),
    writeStreamFactory.createSteam(options),
    (err) => {
        if(err) {
            console.error(err);
            return;
        }

        console.log('done');
    }
);

return 0;