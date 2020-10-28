
class Service {
    constructor(props) {
        //this.baseUrl = 'https://nodejs-gql.herokuapp.com/api/book';
        this.baseUrl = 'api/book?order=1&column=_id&pagesize=5000&start=0';

    }

    fetch(callback, api, method, data) {
        return fetch(this.baseUrl + (api ? '/' + api : ""), {
            method: method ? method : 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data ? JSON.stringify(data) : null,
        }).then(response => response.json())
            .then(response => {
                if (!response.error) {
                    return response.response.result;
                }
                else {
                    throw new Error(response.error);
                }
            })
            .then(callback)
    }
    coursesGetAll() {
        return this.fetch()
    }
    peopleGetAll() {
        return this.fetch()
    }
    peopleSave(data) {
        return this.fetch(null, "", "POST", data)
    }
}

export default Service;