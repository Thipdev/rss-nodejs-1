function validate(options) {
    if(!options.shift) {
        console.error('Command-line argument <shift> is missed or zero.');
        return false;
    }

    if(!options.action) {
        console.error('Command-line argument <action> is missed.');
        return false;
    }

    if(options.action.toLowerCase() != 'encode' && options.action.toLowerCase() != 'decode') {
        console.error('Command-line argument <action> has incorrect value. Correct value is decode or encode.');
        return false;
    }

    // converto to number
    options.shift = options.shift*1;

    return true;
}

module.exports = {
    validate
};