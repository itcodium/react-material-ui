const styles = theme => ({



    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing.unit * 5,
    },
    avatar: {
        margin: theme.spacing.unit * 1,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit * 1,
    },
    submit: {
        marginTop: theme.spacing.unit * 1,
        marginBottom: theme.spacing.unit * 1,
        width: '100%', // Fix IE 11 issue.
    },
});
export default styles;