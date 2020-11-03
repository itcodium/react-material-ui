import ChatTypes from './Chat.types'
import uuid from 'uuid'
const initialState = { messages: [] };

let chatReducer = function (state = initialState, action) {
    switch (action.type) {
        case ChatTypes.ADD_MESSAGE: {
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4(),
            };
            const threadIndex = state.threads.findIndex(
                (t) => t.id === action.threadId
            );
            const oldThread = state.threads[threadIndex];
            const newThread = {
                ...oldThread,
                messages: oldThread.messages.concat(newMessage),
            };
            return {
                ...state,
                threads: [
                    ...state.threads.slice(0, threadIndex),
                    newThread,
                    ...state.threads.slice(
                        threadIndex + 1, state.threads.length
                    ),
                ],
            };
        }
        case ChatTypes.DELETE_MESSAGE:
            {
                const threadIndex = state.threads.findIndex(
                    (t) => t.messages.find((m) => (
                        m.id === action.id
                    ))
                );
                const oldThread = state.threads[threadIndex];
                const newThread = {
                    ...oldThread,
                    messages: oldThread.messages.filter((m) => (
                        m.id !== action.id
                    )),
                };
                return {
                    ...state,
                    threads: [
                        ...state.threads.slice(0, threadIndex),
                        newThread,
                        ...state.threads.slice(
                            threadIndex + 1, state.threads.length
                        ),
                    ],
                };
            }
        case ChatTypes.OPEN_THREAD:
            {
                return {
                    ...state,
                    activeThreadId: action.id,
                };
            }
        default: return state
    }
}

export default chatReducer;