import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './ThreadList.style.js';
class ThreadList extends React.Component {
    static contextTypes = {
        users: PropTypes.array,
    };
    componentWillReceiveProps(nextProps, nextContext) {
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
    }
    componentDidUpdate(prevProps, prevState, prevContext) {
    }
    render() {
        return (
            <div className={styles.threadList}>
                <ul className={styles.list}>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(ThreadList);