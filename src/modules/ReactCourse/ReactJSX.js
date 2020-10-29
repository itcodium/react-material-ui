
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './ReactJSX.style.js';
import { NavLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import PropTypesComponent from './PropTypes/PropTypesComponent';
import Switch from './Switch/Switch'
import WelcomeDialog from './ChildrenComponent/WelcomeDialog'
import List from './TestUnit/List/List'

class ReactJSX extends React.Component {
    constructor(props) {
        super(props);
        this.boldElement = React.createElement('b', null, "Text (as a string)");
        this.boldElementHtml = <b>Text HTML (as a string)</b>;
        this.element = <div>Hello world</div>;
        this.htmlElement = (<div>Hello world</div>);
        this.Message = props => (<div>{props.text}</div>);
    }

    componentDidMount() {
    }
    renderAdminMenu = () => {
        return (<NavLink to="/home">User accounts</NavLink>)
    }
    render() {
        const { classes } = this.props;
        const userLevel = this.props.userLevel;
        const loggedInUser = false;
        const warningLevel = 'debug';
        const component = (<p className={warningLevel === 'debug2' ? classes.green : classes.red} log={"true"} >Test component</p>)
        const propsBadge = { badgeContent: 2, color: "primary" }

        return (
            <div className={classes.root}>
                <Container component="main">
                    <List></List>
                    <WelcomeDialog title={"TEST 0001"}></WelcomeDialog>
                    <Typography className={classes.title} variant="h2" component="h4">Components</Typography>

                    <PropTypesComponent></PropTypesComponent>
                    <PropTypesComponent headerText={"Hola que tal?"}></PropTypesComponent>
                    <Switch></Switch>
                    <Typography className={classes.title} variant="h2" component="h4">JavaScript Syntax Extension (JSX)</Typography>
                    {this.boldElement}
                    {this.boldElementHtml}
                    {this.element}
                    {this.htmlElement}
                    {component}
                    <h3>- JSX Conditional Child Expressions</h3>
                    <ul>
                        <li>Menu</li>
                        {userLevel !== 'admin' && this.renderAdminMenu()}
                    </ul>
                    <h3>- We can also use the ternary operator</h3>
                    <ul>{loggedInUser ? this.element : <PersonIcon />}</ul>
                    <h3>- JSX Boolean Attributes, disabled input</h3>
                    <input name='Name' disabled={true} />
                    <h3>- JSX Comments</h3>
                    {/*
                        Show the admin menu if the userLevel is 'admin'
                    */}
                    {userLevel === 'admin' && <p>No es admin</p>}

                    <h3>- JSX Spread Syntax</h3><br></br>
                    <Badge badgeContent={4} color="primary">
                        <MailIcon />
                    </Badge>
                    <Badge {...propsBadge}>
                        <MailIcon />
                    </Badge>
                    <h3>- htmlFor</h3>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type='email' />
                    <h3>- HTML Entities and Emoji</h3>
                    <ul>
                        <li>dolphin: {'\uD83D\uDC2C'}</li>
                        <li>dolphin: {'\uD83D\uDC2C'}</li>
                        <li>dolphin: {'\uD83D\uDC2C'}</li>
                    </ul>

                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(ReactJSX);