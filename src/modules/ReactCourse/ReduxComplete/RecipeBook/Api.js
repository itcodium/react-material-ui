
// https://github.com/agraboso/redux-api-middleware
// https://redux-saga.js.org/index.html
const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type !== 'API') {
        return next(action);
    }
    const { payload } = action;
    const handleError = error => dispatch({ type: payload.error, payload: error });
    dispatch({ type: payload.pending });
    fetch(payload.url)
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