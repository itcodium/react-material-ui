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

function messagesReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4(),
            };
            return state.concat(newMessage);
        }
        case 'DELETE_MESSAGE': {
            return state.filter(m => m.id !== action.id);
        }
        default: {
            return state;
        }
    }
}
function findThreadIndex(threads, action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            return threads.findIndex(
                (t) => t.id === action.threadId
            );
        }
        case 'DELETE_MESSAGE': {
            return threads.findIndex(
                (t) => t.messages.find((m) => (
                    m.id === action.id
                ))
            );
        }
        default: {
            return threads;
        }
    }
}

function threadsReducer(state = [], action) {
    switch (action.type) {
        case ChatTypes.ADD_MESSAGE: {
            const threadIndex = state.findIndex(
                (t) => t.id === action.threadId
            );
            const oldThread = state[threadIndex];
            const newThread = {
                ...oldThread,
                messages: messagesReducer(oldThread.messages, action),
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
                const threadIndex = findThreadIndex(state, action);
                const oldThread = state[threadIndex];
                const newThread = {
                    ...oldThread,
                    messages: messagesReducer(oldThread.messages, action),
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