import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextFieldSubmit from './TextFieldSubmit';
import MessageListAtom from './MessageListAtom';
class Thread extends Component {
    state = {
        value: null
    }
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
                <TextFieldSubmit onSubmit={this.props.onMessageSubmit} threadId={activeThreadId} />
                <MessageListAtom
                    messages={activeThread.messages}
                    onClick={this.props.onMessageClick}>
                </MessageListAtom>
            </Container>
        )
    }
}
export default Thread;