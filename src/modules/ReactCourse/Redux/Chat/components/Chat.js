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
        //const messages = window.store.getState().messages;
        const state = window.store.getState();
        const activeThreadId = state.activeThreadId;
        const threads = state.threads;
        const activeThread = threads.find((t) => t.id === activeThreadId);
        const tabs = threads.map(t => (
            {
                title: t.title,
                active: t.id === activeThreadId,
                id: t.id,
            }
        ));
        return (
            <div>
                <ThreadTabs tabs={tabs} />
                <br></br>
                <Thread thread={activeThread} />
            </div>
        )
    }
}
export default Chat;