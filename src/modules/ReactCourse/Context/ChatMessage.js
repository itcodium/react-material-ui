import React from 'react';
import PropTypes from 'prop-types';
class ChatMessage extends React.Component {
    static contextTypes = {
        userMap: PropTypes.object,
        };
} 
export default ChatMessage;