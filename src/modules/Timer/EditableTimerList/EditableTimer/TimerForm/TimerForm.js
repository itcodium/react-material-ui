import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TimerForm.style.js';
class TimerForm extends React.Component {
    render() {
       // const { classes } = this.props;
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                     4. TimerForm<br></br>
                <div className='content'>
                    <div className='ui form'>
                        
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'>
                                {submitText}
                            </button>
                            <button className='ui basic red button'>
                                Cancel
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/*

<div className='field'>
                            <label>Title</label>
                            <input type='text' defaultValue={this.props.title} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text' defaultValue={this.props.project} />
                        </div>
                        
                        */
export default withStyles(styles)(TimerForm);