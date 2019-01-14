import axios from 'axios';

export var ApiCaller = function () {
    this.get = function (url, callback, callback_error) {
        fetch(url, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(callback).catch(callback_error);
    }
    this.post = function (url, data, callback, callback_error) {

        axios.post(url, data)
            .then(callback)
            .catch(callback_error);

        /*
                fetch(url, {
                    method: 'post',
                    body: data,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then(callback).catch(callback_error);
                    */
    }
};