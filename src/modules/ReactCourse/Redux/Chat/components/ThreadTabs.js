import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import TabsAtom from './TabsAtom'
import { openThread } from '../Chat.actions';

class ThreadTabs extends Component {
    state = {
        value: 0
    }
    render() {
        return (
            <Paper square>
                <TabsAtom
                    id={this.state.value}
                    tabs={this.props.tabs}
                    onClick={(id, index) => {
                        this.setState({ value: index });
                        this.props.openThread(id);
                    }}
                ></TabsAtom>
            </Paper>
        )
    }
}

const mapStateToTabsProps = (state) => {
    const tabs = state.chatReducer.threads.map(t => (
        {
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id,
        }
    ));
    return {
        tabs,
    };
};
const mapDispatchToProps = { openThread }

export default compose(connect(
    mapStateToTabsProps,
    mapDispatchToProps
))(ThreadTabs)

