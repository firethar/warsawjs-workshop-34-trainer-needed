(function (root) {


    function main() {
        root.app.setupServer();
        root.app.setupUI();
    }

    root.addEventListener('DOMContentLoaded', main);

}(window));
