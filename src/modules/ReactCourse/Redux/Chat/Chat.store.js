function chatCreateStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];
    const subscribe = (listener) => (
        listeners.push(listener)
    );
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    };
    const getState = () => (state);
    return {
        subscribe,
        getState,
        dispatch,
    };
}

export default chatCreateStore;