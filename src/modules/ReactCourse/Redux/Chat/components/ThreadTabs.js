import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

class ThreadTabs extends Component {
    state = {
        value: 0
    }
    handleClick = (index, id) => {
        this.setState({
            value: index,
        })
        window.store.dispatch({
            type: 'OPEN_THREAD',
            id: id,
        });
    };
    componentDidMount() {
        window.store.subscribe(() => this.forceUpdate());
    }
    render() {
        const { children, value, index } = this.props;
        /*active={tab.active ? 'active' : ''}   */
        const tabs = this.props.tabs.map((tab, index) => (
            <Tab key={index} label={tab.title} onClick={() => this.handleClick(index, tab.id)}  {...a11yProps(index)} />
        ));
        return (
            <Paper square>
                <Tabs value={this.state.value} aria-label="simple tabs example">
                    {tabs}
                </Tabs>
            </Paper>
        )
    }
}
export default ThreadTabs;