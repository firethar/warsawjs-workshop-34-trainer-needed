(function (root) {
    let socket = null;

    function sendMessage(data) {
        console.log('sendMessage', data);
        const payload = data;
        socket.send(JSON.stringify(payload));
    }

    function reconnect() {
        const time = 5678; // ms
        setTimeout(() => {
            console.log('reconnect', time);
            setupServer();
        }, time);
    }

    function setupServer() {
        console.log('setupServer');

        socket = new WebSocket(root.app.config.url);

        socket.addEventListener('open', () => {
            console.log('client open');
        });
        socket.addEventListener('message', (evt) => {
            try {
                const payload = evt.data;
                const data = JSON.parse(payload);
                console.log('client message', data);

                // tworzenie customEventa do nasluchiwania eventu 'alarm'
                // wysylanego przy onclick'u na przycisku "Alarm"

                document.dispatchEvent(new CustomEvent(data.action));
            } catch (err) {
                console.error(err);
            }
        });
        socket.addEventListener('close', () => {
            console.log('client close');
            reconnect();
        });
        socket.addEventListener('error', () => {
            console.log('client error');
            reconnect();
        });
    }
    Object.assign(root.app, { sendMessage, setupServer, reconnect });

}(window));
