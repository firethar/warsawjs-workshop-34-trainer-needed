(function (root) {
    function setupUI() {
        console.log('alarm-button: setupUI');
        const $alarm = document.querySelector('button');
        $alarm.addEventListener('click', () => {
            console.log('client click');
            root.app.sendMessage({ action: 'alarm' });
        });
    }

    Object.assign(root.app, { setupUI });
}(window));
