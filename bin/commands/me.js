module.exports = {
    name: 'me',
    description: 'Return informations about the User',
    options: {
        login: false,
    },
    run: (client, args) => {
        console.log("Yoo it's me !");
    }
}