const styles = theme => ({
    container: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 0,
        marginRight: theme.spacing.unit * 0,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 0 * 0)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },

    /* Quienes somos */
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    gridList: {
        width: 'auto',
        height: 'auto',
        transform: 'translateZ(0)',
    },
    testBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 90%, rgba(0,0,0,0.9) 100%, rgba(0,0.9,0,0.9) 100%)',
    },
    titleBar: {
        height: "100%",
        paddingTop: "10px"

    },
    icon: {
        color: 'white',
    },
});

export default styles;