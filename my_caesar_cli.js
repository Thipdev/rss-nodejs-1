const { options } = require('./args');
const validator = require('./args-validator');

if(!validator.validate(options)) {
    return 1;
}

return 0;