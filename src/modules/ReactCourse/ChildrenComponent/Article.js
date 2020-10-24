
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

class Article extends React.Component {

    render() {
        return (
            <AccordionDetails>
            <Typography>
                {this.props.children}        
            </Typography>
          </AccordionDetails>
        )
    }
}

export default Article;