
const Log = ({ getState, dispatch }) => (next) => (action) => {
    console.log(`Log Action: ${action.type}`);
    next(action);
};

export default Log;