(function (root) {
    const app = {
        config: {
            url: 'ws://localhost:3000'
        }
    };

    // zamiast
    // root.app = app;
    // jest
    Object.assign(root, { app });
}(window));
