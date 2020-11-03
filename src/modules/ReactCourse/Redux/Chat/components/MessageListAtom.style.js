import { grey } from '@material-ui/core/colors';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        marginBottom: theme.spacing(1),
        backgroundColor: grey[100],
    },

    fab: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
});
export default styles;