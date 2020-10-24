
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Switch.style.js';
const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';
class Switch extends React.Component {
    state = {
        payMethod: BTC,
    };
    select = (choice) => {
        return (evt) => {
            this.setState({
                payMethod: choice,
            });
        };
    };
    renderChoice = (choice) => {
        const cssClasses = [];
        if (this.state.payMethod === choice) {
            cssClasses.push(this.props.classes.active); 
        }
        console.log(cssClasses)
        return <div onClick={this.select(choice)} className={cssClasses}>
            {choice}  
        </div>
    };
    render() {
         
        return (
            <div className='switch'>
                {this.renderChoice(CREDITCARD)}
                {this.renderChoice(BTC)}
            Pay with: {this.state.payMethod}
            </div>
        );
    }
}

export default withStyles(styles)(Switch);