import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Counter/Counter/Counter'
import counterReducer from './Counter/reducers/Counter'
import Chat from './Chat/components/Chat'

// Counter 
const store = createStore(counterReducer);
const store2 = createStore(counterReducer)
store2.dispatch({ type: 'INCREMENT', amount: 7 });

class Redux extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Counter />
                </Provider>
                <br></br>
                <Provider store={store2}>
                    <Counter />
                </Provider>
                <br></br>
                <Chat></Chat>
            </div>
        );
    }
}

export default Redux;