
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 0,
        marginRight: theme.spacing.unit * 0,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 0 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    container: {
        marginLeft: theme.spacing.unit * 1,
        marginRight: theme.spacing.unit * 1,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 0 * 2)]: {
            width: 1024,
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
    grow: {
        flexGrow: 1,
    },
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing.unit * 0,
        color: theme.palette.text.secondary,
        textAlign: "justify"
    },
    content: {
        minHeight: 600
        ,
    },

    /* Quienes somos */
    markdown: {
        padding: `${ theme.spacing.unit * 3 }px 0`,
    },
    gridList: {
        width: 'auto',
        height: 'auto',
        transform: 'translateZ(0)',
    },

    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 90%, rgba(0,0,0,0.9) 100%, rgba(0,0.9,0,0.9) 100%)',
        color: 'red',

    },
    icon: {
        color: 'white',
    },
    /* App Menu custom */
    fullList: {
        width: 250,
    },
    menuLink: {
        color: grey[900],
        textDecoration: 'none',
        margin: 0,
        paddingLeft: 0,
        color: '#2d496e'
    },
    menuSubLink: {
        textDecoration: 'none',
        margin: 0,
        paddingLeft: 30,
        color: '#2d496e'
    },
    menuSubLinkText: {
        textDecoration: 'none',
        fontSize: '12px',
        fontWeight: "bold",
        color: '#2d496e'
    },
    /* Menu */
    toolbarMain: {
        margin: 0,
        padding: 0
    },
    /* Nav Bar Custom */
    toolbarSecondary: {
        justifyContent: 'center',

    },

    /* Footer */
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${ theme.palette.divider }`,
        padding: `${ theme.spacing.unit * 6 }px 0`,
    },

    toolbarTitle: {
        flex: 1,
    },

    noMargin: {
        margin: 0,
        padding: 0
    },

});
export default styles;