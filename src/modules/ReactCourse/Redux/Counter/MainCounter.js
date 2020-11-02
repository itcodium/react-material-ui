import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Counter/Counter'
import counterReducer from './reducers/Counter'

const store = createStore(counterReducer)
const store2 = createStore(counterReducer)
class MainCounter extends React.Component {
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
            </div>
        );
    }
}

export default MainCounter;