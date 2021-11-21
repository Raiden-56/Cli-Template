const { appendFileSync } = require('fs');
const { getDate, getTime } = require('../utils/functions');

module.exports = (log) => {
    appendFileSync(`./bin/logs/data/${getDate()}.log`, `\n[${getTime()}] ${log}`);
}