
class ClientService {
    constructor(props) {
        this.baseUrl = 'api/timer';
    }

    fetch(callback, api, method, data) {
        return fetch(this.baseUrl + (api ? '/' + api : ""), {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data? JSON.stringify(data): null,
        }).then(response => response.json())
            .then(response => response.response)
            .then(callback);
    }
    getAll(success) {
        this.fetch(success)
    }
    startTimer(success, data) {
        this.fetch(success, data.id + '/start', 'POST', data)
    }
    stopTimer(success, data) {
        this.fetch(success, data.id + '/stop', 'POST', data)
    }
    createTimer(success, data) {
        this.fetch(success, null, 'POST', data)
    }
    updateTimer(success, data) {
        this.fetch(success, data.id, 'PUT', data)
    }
    deleteTimer(success, id) {
        this.fetch(success, id, 'DELETE')
    }


}

export default ClientService;