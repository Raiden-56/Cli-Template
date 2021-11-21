module.exports = {
    name: 'args',
    description: 'Return the args taped with the command',
    options: {
        login: false
    },
    run: (client, args) => {
        console.log(args);
    }
}