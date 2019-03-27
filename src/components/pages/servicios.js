
import React from 'react';
import EnConstruccion from './en.construccion';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import HexagonalGrid from '../grid/hexagonal'


class Servicios extends React.Component {

    render () {
        const { classes } = this.props;
        return (


            <div className={ classes.layout }>
                <div className={ classes.container }>
                    <HexagonalGrid></HexagonalGrid>
                </div>
                <div className={ classes.container }>

                </div>
            </div>
        );
    }
}

export default (withStyles(styles)(Servicios))
