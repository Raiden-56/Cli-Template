const chalk = require('chalk');

module.exports = {
    name: 'help',
    description: 'Return information about all the commands',
    options: {
        login: false,
    },
    run: (client, args) => {
        console.log(chalk.underline(chalk.yellow("Help:")));
        console.log("\n");
        client.commands.forEach(({ name, description }) => {
            console.log(chalk.grey(name + ': \t'), description);
        });
    }
}