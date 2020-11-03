import ChatTypes from './Chat.types'

const initialState = { messages: [] };

let chatReducer = function (state = initialState, action) {
    switch (action.type) {
        case ChatTypes.ADD_MESSAGE:
            console.log("ADD_MESSAGE", state)
            return {
                messages: state.messages.concat(action.message),
            }
        case ChatTypes.DELETE_MESSAGE:
            console.log("DELETE_MESSAGE", state)
            return {
                messages: [
                    ...state.messages.slice(0, action.index),
                    ...state.messages.slice(
                        action.index + 1, state.messages.length
                    ),
                ],
            };
        default: return state
    }
}

export default chatReducer;