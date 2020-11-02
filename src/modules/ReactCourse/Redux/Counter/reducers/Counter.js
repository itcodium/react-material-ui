import ActionTypes from '../Actions/Types'

const initialState = { count: 0 };

let counterReducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { count: state.count + (action.amount ? action.amount : 1) }
        case ActionTypes.DECREMENT:
            return { count: state.count - (action.amount ? action.amount : 1) }
        default: return state
    }
}

export default counterReducer;