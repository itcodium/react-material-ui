import React, { Component } from 'react'
import Container from '@material-ui/core/Container';

import MessageInput from './MessageInput';
import MessageListAtom from './MessageListAtom';
class Thread extends Component {
    state = {
        value: null
    }
    handleClick = (index) => {
        window.store.dispatch({
            type: 'DELETE_MESSAGE',
            id: index,
        });
    };
    componentDidMount() {
        window.store.subscribe(() => this.forceUpdate());
    }
    render() {
        const state = window.store.getState();
        const activeThreadId = state.activeThreadId;
        const activeThread = state.threads.find(
            t => t.id === activeThreadId
        );
        return (
            <Container component="main" maxWidth="sm">
                <MessageInput threadId={activeThreadId} />
                <MessageListAtom
                    messages={activeThread.messages}
                    onClick={this.handleClick}>
                </MessageListAtom>
            </Container>
        )
    }
}
export default Thread;