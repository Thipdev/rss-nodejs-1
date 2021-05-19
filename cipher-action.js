class cipherAction {
    constructor(shift, action) {
        this._shift = shift % 26;
        this._action = action;
    }

    _range1 = { begin: 65, end: 90 };
    _range2 = { begin: 97, end: 122 };

    action(char) {
        if(!this.isDecodedChar(char)) {
            return char;
        }

        let processedChar = char + (this._shift * (this._action == "encode" ? 1 : -1));
        
        if(this.outOfRange(char, processedChar)) {
            processedChar = processedChar + (26 * (this._action == "encode" ? -1 : 1) * (this._shift > 0 ? 1 : -1));
        }
        
        return processedChar;
    }

    isDecodedChar(char) {
        return this.isInside(this._range1, char) || this.isInside(this._range2, char);
    }
    outOfRange(char, processedChar) {
        return (this.isInside(this._range1, char) && !this.isInside(this._range1, processedChar))
        || (this.isInside(this._range2, char) && !this.isInside(this._range2, processedChar));
    }
    isInside(range, char) {
        return char >= range.begin && char <= range.end;
    }
}

module.exports = cipherAction;