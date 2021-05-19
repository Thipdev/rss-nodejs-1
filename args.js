
const { program } = require('commander');

program
    .option('-s|--shift <shift>','Caesar cipher shift.')
    .option('-i|--input <input>','Input file.')
    .option('-o|--output <output>','Output file.')
    .option('-a|--action <shift>','Action encode/decode')
    .parse();

const options = program.opts();       

module.exports = {
    options
};  