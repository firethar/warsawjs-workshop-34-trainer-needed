const { registerClient, deleteClient, broadcast } = require('../services/client-manager');

module.exports = (socket) => {

    //sending payload to client
    const payload2 = { obiad: 'był smaczny' };
    socket.send(JSON.stringify(payload2));

    registerClient(socket);

    socket.on('open', () => {
        console.log('server open');
    });
    socket.on('close', () => {
        console.log('server close');
        deleteClient(socket);
    });
    socket.on('message', (payload) => {
        try {
            const data = JSON.parse(payload);
            console.log('server message', data);
            broadcast(socket, data);
        } catch (err) {
            console.error(err);
        }
    });
    socket.on('error', () => {
        console.log('server error');
        deleteClient(socket);
    });
};
