import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter/Counter/Counter'
import counterReducer from './Counter/reducers/Counter'
import Chat from './Chat/components/Chat'

import storeChat from './Chat/Chat.store'
import storeChat2 from './Chat/Chat.store'

const store = createStore(counterReducer);
const store2 = createStore(counterReducer)
store2.dispatch({ type: 'INCREMENT', amount: 7 });

class Redux extends React.Component {
    render() {
        return (
            <Container component="main" maxWidth="sm">
                <Typography variant="h4" component="h4">Chat</Typography>
                <br></br>
                <Provider store={storeChat}>
                    <Chat></Chat>
                </Provider>
                <br></br>
                <Provider store={storeChat2}>
                    <Chat></Chat>
                </Provider>
                <br></br>
                <Typography variant="h4" component="h4">Contador</Typography>
                <br></br>
                <Provider store={store}>
                    <Counter />
                </Provider>
                <br></br>
                <Provider store={store2}>
                    <Counter />
                </Provider>
            </Container>
        );
    }
}

export default Redux;