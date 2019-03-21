
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 0,
        marginRight: theme.spacing.unit * 0,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
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
        padding: theme.spacing.unit * 1,
        color: theme.palette.text.secondary,
        textAlign: "justify"
    },
    content: {
        minHeight: 600
        ,
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
    },
    menuSubLink: {
        textDecoration: 'none',
        margin: 0,
        paddingLeft: 30,
    },
    menuSubLinkText: {
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: "bold"
    },
    /* Nav Bar Custom */
    toolbarSecondary: {
        justifyContent: 'center',

    },

    /* Footer */
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    /* Menu */
    toolbarMain: {
        margin: 0
    },
    toolbarTitle: {
        flex: 1,
    },


});
export default styles;