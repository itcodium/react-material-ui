const styles = theme => ({
  
    container: {
        width: 'auto',
        marginBottom:theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1000 + theme.spacing(0))]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
    
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        [theme.breakpoints.up(1100 + theme.spacing(0))]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
    markdown: {
        padding: `${theme.spacing(3)}px 0`,
    },
  /*  gridList: {
        width: 'auto',
        height: 'auto',
        transform: 'translateZ(0)',
    },
    testBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 90%, rgba(0,0,0,0.9) 100%, rgba(0,0.9,0,0.9) 100%)',
    },*/
    titleBar: {
        height: "100%",
        paddingTop: "10px"

    },
    icon: {
        color: 'white',
    },
});

export default styles;