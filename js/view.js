(function () {
    function View() {
        this.DOMElements = {
            saveBtn    : document.querySelector('#sevaBtn'),
            refreshBtn : document.querySelector('#refreshBtn'),
        };

        this.ready = false;
        this.couner = 0;
    }

    View.prototype = {
        init: function (items) {
            this.items = items;
            this.buildView();
            this.ready = true;
        },

        buildView: function () {
            console.log('View is ready');
            console.log(this.items);
        },
        getItemToSave: function () {
            let item = this.items[0];
            item.name = 'Iphone';
            return item;
        }
    }
})();
