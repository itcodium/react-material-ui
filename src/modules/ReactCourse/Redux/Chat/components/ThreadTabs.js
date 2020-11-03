import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import TabsAtom from './TabsAtom'
class ThreadTabs extends Component {
    state = {
        value: 0
    }
    handleClick = (index, id) => {
        this.setState({
            value: index,
        })
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
                    value={this.state.value}
                    tabs={tabs}
                    onClick={this.handleClick}
                ></TabsAtom>
            </Paper>
        )
    }
}
export default ThreadTabs;