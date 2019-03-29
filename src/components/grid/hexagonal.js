import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import hexagonalData from './hexagonal.data'
import styles from './style.css';



class HexagonalGrid extends React.Component {
    render () {
        const { classes } = this.props;
        const image_list = hexagonalData.map((item, index) => (
            <div id={ "hex" + index } class={ "hex" + index + " fadein" }  >
                <img class="clip-o" src={ item.image } />
            </div>
        ))

        return (
            <div class="contentGrid">

                <div class="main-grid">
                    <div class="bg"></div>
                    <div class="bg bg2"></div>
                    <div class="bg bg3"></div>
                    <div id="hex1" class="hex1 fadein">
                        <img class="clip-o" src="./static/services/1.jpg" />
                    </div>
                    <div id="hex2" class="hex2 fadein">
                        <img class="clip-o" src="./static/services/2.jpg" />
                    </div>
                    <div id="hex3" class="hex3 fadein">
                        <img class="clip-o" src="./static/services/4.jpg" />
                    </div>
                    <div id="hex4" class="hex4 fadein">
                        <img class="clip-o" src="./static/services/3.jpg" />
                    </div>
                    <div id="hex5" class="hex5 fadein">
                        <img class="clip-o" src="./static/services/5.jpg" />
                    </div>
                    <div id="hex6" class="hex6 fadein">
                        <img class="clip-o" src="./static/services/6.jpg" />
                    </div>
                    <div id="hex7" class="hex7 fadein">
                        <img class="clip-o" src="./static/services/1.jpg" />
                    </div>
                    <div id="hex8" class="hex8 fadein">
                        <img class="clip-o" src="./static/services/2.jpg" />
                    </div>
                </div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            </div>
        );
    }
}



export default HexagonalGrid;
