const whitelist = require('../config/host-whitelist');
const debug = require('debug');

const console = {
    log: debug('verify-client:log')
};

function verifyClient(client) {
    const host = client.origin;
    const status = whitelist.includes(host);
    console.log(`status = ${status}`);
    return status;
}

module.exports = {
    verifyClient
};
