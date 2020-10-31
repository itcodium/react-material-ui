import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import styles from './Login.style.js';
import LoginService from '../../../Services/LoginService';
// https://raw.githubusercontent.com/mui-org/material-ui/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
class Login extends React.Component {

    state = {
        loginInProgress: false,
        shouldRedirect: false,
    };
    service = LoginService;
    performLogin = (event) => {
        event.preventDefault();
        this.setState({ loginInProgress: true })
        setTimeout(() => {
            this.service.logIn(true)
            this.setState({ shouldRedirect: true })
        }, 1000);

    };
    redirectPath = () => {
        const locationState = this.props.location.state;
        const pathname = (
            locationState && locationState.from && locationState.from.pathname
        );
        return pathname || '/oceans';
    };
    render() {
        const { classes } = this.props;

        if (this.state.shouldRedirect) {
            return (
                <Redirect to={this.redirectPath()} />
            );
        } else {
            return (
                <div className={classes.paper}>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                </Typography>
                    <Grid item>
                        <form className={classes.form} noValidate>
                            <Grid container>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />

                                {
                                    this.state.loginInProgress ? (
                                        <div>LOADING</div>
                                    ) : (
                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={this.performLogin}
                                            >
                                                Sign In
                                            </Button>

                                        )
                                }
                            </Grid>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                            </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>

                </div>

            );
        }
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);