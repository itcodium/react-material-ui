
class Service {
    constructor(props) {
        this.baseUrl = 'https://nodejs-gql.herokuapp.com/api/timer';
    }

    fetch(callback, api, method, data) {
        return fetch(this.baseUrl + (api ? '/' + api : ""), {
            method: method ? method :'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data ? JSON.stringify(data) : null,
        }).then(response => response.json())
            .then(response => (response.response? response.response.result.Timers : []))
            .then(callback);
    }
    coursesGetAll() {
        return this.fetch()
    }
}

export default Service;