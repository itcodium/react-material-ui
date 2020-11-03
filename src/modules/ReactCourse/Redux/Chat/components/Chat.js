import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import MessageView from './MessageView';
import MessageInput from './MessageInput';

import chatReducer from '../Chat.reducer'
import chatCreateStore from '../Chat.store'
window.store = chatCreateStore(chatReducer, { messages: [] });

class Chat extends Component {

    componentDidMount() {
        window.store.subscribe(() => this.forceUpdate());
    }
    render() {
        const messages = window.store.getState().messages;
        return (
            <Container component="main" maxWidth="xs">

                <MessageInput />
                <MessageView messages={messages} />

            </Container>
        )
    }
}
export default Chat;