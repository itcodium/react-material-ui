import React from 'react';
import PropTypes from 'prop-types';
class ChatWindow extends React.Component {
    static contextTypes = {
        userMap: PropTypes.object,
    };
} 
export default ChatWindow;