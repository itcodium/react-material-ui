import React, { Component } from 'react'
import compose from 'recompose/compose';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Counter.style.js';
import { increment, decrement } from '../Actions/Counter'

class Counter extends Component {

    static mapStateToProps = state => {
        return {
            count: state.count,
            amount: state.amount
        }
    };
    static mapDispatchToProps = dispatch => {
        return bindActionCreators({ increment, decrement }, dispatch)
    }
    render() {
        const { classes } = this.props;
        const { increment, decrement } = this.props;
        return (
            <div>
                <Button variant="contained" onClick={decrement}>-</Button>
                <Typography className={classes.label} variant="h6" display="inline">
                    {this.props.count}
                </Typography>
                <Button variant="contained" onClick={increment} >+</Button>
            </div>)
    }
}

export default compose(connect(
    Counter.mapStateToProps,
    Counter.mapDispatchToProps
), withStyles(styles))(Counter)

