class ClientService {
    constructor(props) {
        this.url = "https://localhost:4000/";
    }
    getAll(success) {
        return fetch('api/timer', {
            headers: {
                Accept: 'application/json',
            },
        }).then(response => response.json())
        .then(response => response.response.result.Timers)
        .then(success);
    }
}

export default ClientService;