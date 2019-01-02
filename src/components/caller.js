
export var ApiCaller = function () {
    this.get = function (url,callback,callback_error) {
        fetch(url, {
            method: 'get',
            headers: {  'Accept': 'application/json',
                        'Content-Type': 'application/json',}})
        .then((response) => response.json())
        .then(callback).catch(callback_error);
    }
};