(function (root) {
    function setupUI() {
        console.log('notification: setupUI');

        const $message = document.querySelector('p.message');

        //customEvent
        document.addEventListener('alarm', () => {
            $message.classList.remove('hidden');
        });
    }

    Object.assign(root.app, { setupUI });
}(window));
