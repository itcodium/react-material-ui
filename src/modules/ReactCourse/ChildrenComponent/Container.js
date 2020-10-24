
import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Article from './Article'
class Container extends React.Component {
    static propTypes = {
        component: PropTypes.element.isRequired,
        children: PropTypes.element.isRequired
    }
    renderChild = (childData, index) => {
        return React.createElement(
            this.props.component,
            {},
            childData
        )
    }
    render() {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{this.props.headline}</Typography>
                </AccordionSummary>
                <Article>
                    <AccordionDetails>
                        <Typography>
                            {this.props.children}
                        </Typography>
                    </AccordionDetails>
                </Article>
            </Accordion>
        )
    }
}

export default Container;