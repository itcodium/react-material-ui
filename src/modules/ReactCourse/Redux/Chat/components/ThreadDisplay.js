import React, { Component } from 'react'
import Container from '@material-ui/core/Container';

import Thread from './Thread';

class ThreadDisplay extends Component {
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
                <Thread
                    thread={activeThread}
                    onMessageClick={(id) => (
                        window.store.dispatch({
                            type: 'DELETE_MESSAGE',
                            id: id,
                        })
                    )}
                    onMessageSubmit={(text) => (
                        window.store.dispatch({
                            type: 'ADD_MESSAGE',
                            text: text,
                            threadId: activeThreadId,
                        })
                    )} />
            </Container>
        )
    }
}
export default ThreadDisplay;