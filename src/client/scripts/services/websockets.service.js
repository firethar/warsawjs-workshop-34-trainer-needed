(function (root) {
    let socket = null;

    function sendMessage(data) {
        const payload = data;
        socket.send(JSON.stringify(payload));
    }

    function setupServer() {
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
        });
        socket.addEventListener('error', () => {
            console.log('client error');
        });
    }
    Object.assign(root.app, { sendMessage, setupServer });

}(window));
