import ChatTypes from './Chat.types'
import uuid from 'uuid'
function chatReducer(state, action) {
    return {
        activeThreadId: activeThreadIdReducer(state.activeThreadId, action),
        threads: threadsReducer(state.threads, action),
    };
}
function activeThreadIdReducer(state, action) {
    if (action.type === 'OPEN_THREAD') {
        return action.id;
    } else {
        return state;
    }
}
function threadsReducer(state, action) {
    switch (action.type) {
        case ChatTypes.ADD_MESSAGE: {
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4(),
            };
            const threadIndex = state.findIndex(
                (t) => t.id === action.threadId
            );
            const oldThread = state[threadIndex];
            const newThread = {
                ...oldThread,
                messages: oldThread.messages.concat(newMessage),
            };
            return [
                ...state.slice(0, threadIndex),
                newThread,
                ...state.slice(
                    threadIndex + 1, state.length
                ),
            ];
        }
        case ChatTypes.DELETE_MESSAGE:
            {
                const threadIndex = state.findIndex(
                    (t) => t.messages.find((m) => (
                        m.id === action.id
                    ))
                );
                const oldThread = state[threadIndex];
                const newThread = {
                    ...oldThread,
                    messages: oldThread.messages.filter((m) => (
                        m.id !== action.id
                    )),
                };
                return [
                    ...state.slice(0, threadIndex),
                    newThread,
                    ...state.slice(
                        threadIndex + 1, state.length
                    ),
                ];
            }
        default: return state
    }
}

export default chatReducer;