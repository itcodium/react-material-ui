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
                    <div id="hex1" class="hex1 fadein">
                        <img class="clip-o" src="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?cs=srgb&dl=beach-bench-boardwalk-462024.jpg&fm=jpg" />
                    </div>
                    <div id="hex2" class="hex2 fadein">
                        <img class="clip-o" src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=landscape-nature-ocean-36717.jpg&fm=jpg" />
                    </div>
                    <div id="hex3" class="hex3 fadein">
                        <img class="clip-o" src="https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=forest-landscape-light-35600.jpg&fm=jpg" />
                    </div>
                    <div id="hex4" class="hex4 fadein">
                        <img class="clip-o" src="https://images.pexels.com/photos/262669/pexels-photo-262669.jpeg?cs=srgb&dl=astronomy-cosmos-crater-lake-national-park-262669.jpg&fm=jpg" />
                    </div>
                    <div id="hex5" class="hex5 fadein">
                        <img class="clip-o" src="https://cdn.pixabay.com/photo/2016/07/02/12/21/wallpaper-1492818_960_720.jpg" />
                    </div>
                    <div id="hex6" class="hex6 fadein">
                        <img class="clip-o" src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=forest-haze-landscape-39811.jpg&fm=jpg" />
                    </div>
                    <div id="hex7" class="hex7 fadein">
                        <img class="clip-o" src="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=568&h=320&fit=crop" />
                    </div>

                    <div id="hex8" class="hex8 fadein">
                        <img class="clip-o" src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=forest-haze-landscape-39811.jpg&fm=jpg" />
                    </div>
                </div>
            </div>
        );
    }
}



export default HexagonalGrid;

/*


            <div class="containerGrid">
                <div class="mainGrid" >
                    { image_list }
                </div>
            </div>

*/