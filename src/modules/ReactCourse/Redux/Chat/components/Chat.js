import React, { Component } from 'react'

import uuid from 'uuid'
import Thread from './Thread';
import ThreadTabs from './ThreadTabs';

import chatReducer from '../Chat.reducer'
import chatCreateStore from '../Chat.store'

const initialState = {
    activeThreadId: '1-fca2',
    threads: [
        {
            id: '1-fca2',
            title: 'Buzz Aldrin',
            messages: [
                {
                    text: 'Twelve minutes to ignition.',
                    timestamp: Date.now(),
                    id: uuid.v4(),
                },
                {
                    text: 'One minutes to ignition.',
                    timestamp: Date.now(),
                    id: uuid.v4(),
                },
            ],
        },
        {
            id: '2-be91',
            title: 'Michael Collins',
            messages: [],
        },
    ],
};
window.store = chatCreateStore(chatReducer, initialState);

class Chat extends Component {

    componentDidMount() {
        window.store.subscribe(() => this.forceUpdate());
    }
    render() {
        return (
            <div>
                <ThreadTabs />
                <br></br>
                <Thread />
            </div>
        )
    }
}
export default Chat;