import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Timer.style.js';
class Timer extends React.Component {
    render() {
      //  const { classes } = this.props;
        const elapsedString = null; //helpers.renderElapsedString(this.props.elapsed);
        return (
            <div className='ui centered card'>
                  4. Timer<br></br>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Timer);