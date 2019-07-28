const debug = require('debug');

const console = {
    log: debug('client-manager:log')
};

const clients = [];

function registerClient(client) {
    console.log('registerClient');
    clients.push(client);
}

function deleteClient(client) {
    console.log('deleteClient');
    const index = clients.indexOf(client);
    if (index === -1) {
        return;
    }
    clients.splice(index, 1);
}

function broadcast(broadcastingClient, payload) {

    clients.forEach((client) => {
        console.log('broadcastClient');
        if (broadcastingClient === client) {
            return;
        }
        const data = JSON.stringify(payload);
        client.send(data);
    });
}


module.exports = {
    registerClient,
    deleteClient,
    broadcast
};
