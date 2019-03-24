import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});
class SimpleSnackbar extends React.Component {
    id = null;
    constructor(props) {
        super(props);
        //  this.id = this.props.enqueueSnackbar('Test OnLoad.', { autoHideDuration: 4000, variant: "warning" });

    }
    handleClick = () => {
        this.id = this.props.enqueueSnackbar(
            'TEST from component.', {
                autoHideDuration: 3000, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                }
            });
    };
    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>Simple Snackbar Open</Button>
            </div>
        );
    }
}
SimpleSnackbar.propTypes = {
    enqueueSnackbar: PropTypes.func.isRequired,
};
export default withSnackbar((withStyles(styles)(SimpleSnackbar)))

// https://iamhosseindhv.com/notistack