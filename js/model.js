(function () {
    class Model {
        constructor(url){
            this.getUrl = url;
        }

        getData(){
            return fetch(this.getUrl).then(response => response.json())
                .then(data => {
                    console.log('Initial data is loaded');
                    return data;
                })
        }

        saveData(item) {
            console.log('Saving item..' + item.name);
            let iphone = {
                "name": "Saved Samsung",
                "price": 123456,
                "popular": true,
                "date": 122589
            }

            return new Promise(
                function (resolve, reject) {
                    resolve(iphone);
                }
            )
        }

        updateData(counter) {
            console.log('Updating item..' + counter);
            let samsung = {
                "name": "Saved Samsung",
                "price": 123456,
                "popular": true,
                "date": 122589
            }

            return Promise.resolve(samsung);
        }
    }

    window.app = window.app || {};
    window.app.Model = Model;
})();