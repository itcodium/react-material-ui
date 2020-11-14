
import axios from 'axios';
import Types from './Types'

const BASE_URL = "";

const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type !== 'API') {
        console.log('action: ', action);
        return next(action);
    }
    const { payload } = action;
    console.log('*** payload: ', payload);
    const handleError = error => dispatch({ type: payload.error, payload: error });
    dispatch({ type: payload.pending });
    fetch(BASE_URL + payload.url)
        .then(response => {
            if (response.status >= 300) {
                handleError(response.status);
            } else {
                response
                    .json()
                    .then(data => dispatch({ type: payload.success, payload: data }))
            }
        })
        .catch(handleError);
};

export default apiMiddleware;