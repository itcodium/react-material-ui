
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Newspaper.style.js';
import Container from './Container'
class Newspaper extends React.Component {
    render() {
        return (
            <Container headline={this.props.title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Container>
        )
    }
}

export default withStyles(styles)(Newspaper);