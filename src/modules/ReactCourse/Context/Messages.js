import React from 'react';
import PropTypes from 'prop-types';
import ThreadList from './ThreadList'
import ChatWindow from './ChatWindow'

class Messages extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        initialActiveChatIdx: PropTypes.number,
        messages: PropTypes.array.isRequired,
    };
    static childContextTypes = {
        users: PropTypes.array,
        userMap: PropTypes.object,
    };
    getChildContext() {
        return {
            users: this.getUsers(),
            userMap: this.getUserMap(),
        };
    }
    render() {
        return (
            <div>
                <ThreadList />
                <ChatWindow />
            </div>
        )
    }
}

export default Messages;