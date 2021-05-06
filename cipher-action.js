class cipherAction {
    constructor(shift, action) {
        this._shift = shift % 26;
        this._action = action;
    }

    _range1 = { begin: 65, end: 90 };
    _range2 = { begin: 97, end: 122 };

    action(char) {
        if(!this.insideOfRange(char)) {
            return char;
        }

        let processedChar = char + (this._shift * (this._action == "encode" ? 1 : -1));
        
        if(!this.insideOfRange(processedChar)) {
            processedChar = processedChar + (26 * (this._action == "encode" ? -1 : 1) * (this._shift > 0 ? 1 : -1));
        }
        
        return processedChar;
    }

    insideOfRange(char) {
        return (char >= this._range1.begin && char <= this._range1.end)
            || (char >= this._range2.begin && char <= this._range2.end);
    }
}

module.exports = cipherAction;