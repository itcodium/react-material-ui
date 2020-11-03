import { grey } from '@material-ui/core/colors';
const styles = theme => ({
    listItem: {
        padding: theme.spacing(1),
        backgroundColor: grey[50],
    },
    inline: {
        display: 'inline',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
});
export default styles;