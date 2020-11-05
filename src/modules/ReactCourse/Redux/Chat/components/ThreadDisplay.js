import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Thread from './Thread';
import { addMessage, deleteMessage } from '../Chat.actions';

class ThreadDisplay extends Component {
    render() {
        const activeThread = this.props.threads.find(
            t => t.id === this.props.activeThreadId
        );
        return (
            <Container component="main" maxWidth="sm">
                <Thread
                    thread={activeThread}
                    onMessageClick={(id) => {
                        this.props.deleteMessage(id);
                    }}
                    onMessageSubmit={(text) => {
                        this.props.addMessage(text, this.props.activeThreadId);
                    }} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return state.chatReducer
}
const mapDispatchToProps = { addMessage, deleteMessage };

export default connect(mapStateToProps, mapDispatchToProps)(ThreadDisplay);