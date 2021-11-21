#! /usr/bin/env node
const log = require('./logs');
const { Client } = require('./Client');
const { errorMessage } = require('./configuration');

const client = new Client();

require('./utils/loader').load(client);

const args = process.argv.slice(2);
const commandName = args.splice(0, 1)[0];

log(`\t\tcommand: ${commandName} \t\t|| args: ${args}`);

const command = client.commands.filter((command) => command.name === commandName)[0];
if (!command) throw (errorMessage);

command.run(client, args);
