(function () {
    let url = './js/data.json';

    let observer = new window.app.Observer;
    let model = new window.app.Model(url);
    let view = new window.app.View;

    let Controller = window.app.Controller;
    let controller = new Controller();
    controller.init();
})();