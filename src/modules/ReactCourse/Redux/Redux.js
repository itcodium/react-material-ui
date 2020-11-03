import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
            <Container component="main" maxWidth="sm">
                <Typography variant="h4" component="h4">Chat</Typography>
                <br></br>
                <Chat></Chat>
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