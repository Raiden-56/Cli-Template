const { red, underline } = require('chalk');
const prefix = Object.keys(require('../../package.json').bin)[0];

module.exports = {
    prefix,
    errorMessage: (red('[Error]:') + ' Invalid Command, Please type ' + underline(prefix + ' help')),
}