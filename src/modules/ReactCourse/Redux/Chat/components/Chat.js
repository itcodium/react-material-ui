import React, { Component } from 'react'
import ThreadDisplay from './ThreadDisplay';
import ThreadTabs from './ThreadTabs';
class Chat extends Component {
    render() {
        return (
            <div>
                <ThreadTabs />
                <br></br>
                <ThreadDisplay />
            </div>
        )
    }
}

export default Chat;

