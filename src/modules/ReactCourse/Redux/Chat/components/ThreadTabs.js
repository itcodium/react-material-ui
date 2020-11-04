import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import TabsAtom from './TabsAtom'

import chatReducer from '../Chat.reducer'
import chatCreateStore from '../Chat.store'

window.store = chatCreateStore(chatReducer);

class ThreadTabs extends Component {
    state = {
        value: 0
    }
    handleClick = (id) => {
        window.store.dispatch({
            type: 'OPEN_THREAD',
            id: id,
        });
    };
    componentDidMount() {
        window.store.subscribe(() => this.forceUpdate());
    }
    render() {
        const state = window.store.getState();
        const tabs = state.threads.map(t => (
            {
                title: t.title,
                active: t.id === state.activeThreadId,
                id: t.id,
            }
        ));
        return (
            <Paper square>
                <TabsAtom
                    id={this.state.value}
                    tabs={tabs}
                    onClick={(id, index) => {
                        this.handleClick(id);
                        this.setState({
                            value: index
                        })
                    }}
                ></TabsAtom>
            </Paper>
        )
    }
}
export default ThreadTabs;