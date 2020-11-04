
const defaultState = {
    activeThreadId: -1,
    threads: [
        {
            id: -1,
            title: "Default Tab-1",
            messages: [],
        },
        {
            id: -2,
            title: "Default Tab-2",
            messages: [],
        },
    ],
};
function chatCreateStore(reducer, initialState = defaultState) {
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