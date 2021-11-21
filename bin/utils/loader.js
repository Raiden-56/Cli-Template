const { readdirSync } = require("fs");

module.exports = {
    load: (client) => {
        const files = readdirSync('./bin/commands');
        const filesNames = files.filter((file) => file.endsWith('.js')).map((file) => file.split('.')[0]);
        filesNames.forEach((fileName) => {
            const command = require('../commands/' + fileName);
            client.commands.push(command)
        });
    },
}