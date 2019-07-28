const setupSocketHandler = require('./socket.handler');

module.exports = (server) => {

    server.on('listening', () => {
        console.log('listening');
    });

    server.on('headers', () => {
        console.log('headers');
    });

    server.on('connection', (socket, _request) => {
        console.log('connection');
        setupSocketHandler(socket);
    });

    server.on('error', () => {
        console.log('error');
    });

};
