/* eslint-disable no-use-before-define */
export const FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST';
function fetchPeopleRequest() {
    return { type: FETCH_PEOPLE_REQUEST };
}

export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
function fetchPeopleSuccess(people) {
    return { type: FETCH_PEOPLE_SUCCESS, people };
}

export const SAVE_PEOPLE_REQUEST = 'SAVE_PEOPLE_REQUEST';
function savePeopleRequest() {
    return { type: SAVE_PEOPLE_REQUEST };
}
export const SAVE_PEOPLE_FAILURE = 'SAVE_PEOPLE_FAILURE';
function savePeopleFailure(error) {
    return { type: SAVE_PEOPLE_FAILURE, error };
}

export const SAVE_PEOPLE_SUCCESS = 'SAVE_PEOPLE_SUCCESS';
function savePeopleSuccess(people) {
    return { type: SAVE_PEOPLE_SUCCESS, people };
}

export function savePeople(people) {
    return function (dispatch) {
        dispatch(savePeopleRequest())
        apiClient.savePeople(people)
            .then((resp) => { dispatch(savePeopleSuccess(people)) })
            .catch((err) => { dispatch(savePeopleFailure(err)) })
    }
}

const apiClient = {
    loadPeople: function () {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.people || '[]'))
                }, 1000);
            }
        }
    },

    savePeople: function (people) {
        const success = !!(this.count++ % 2);
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (!success) return reject({ success });
                localStorage.people = JSON.stringify(people);
                resolve({ success });
            }, 1000);
        })
    },
    count: 1
}

const initialState = {
    people: [],
    isLoading: false,
    saveStatus: 'READY',
    person: {
        name: '',
        email: '',
        course: null,
        department: null
    },
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_PEOPLE_SUCCESS:
            return Object.assign({}, state, {
                people: action.people,
                isLoading: false
            });

        case SAVE_PEOPLE_REQUEST:
            return Object.assign({}, state, {
                saveStatus: 'SAVING'
            });
        case SAVE_PEOPLE_FAILURE:
            return Object.assign({}, state, {
                saveStatus: 'ERROR'
            });
        case SAVE_PEOPLE_SUCCESS:
            return Object.assign({}, state, {
                people: action.people,
                person: {
                    name: '',
                    email: '',
                    course: null,
                    department: null
                },
                saveStatus: 'SUCCESS'
            });
        default:
            return state;
    }
}