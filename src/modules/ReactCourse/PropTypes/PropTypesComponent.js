import React from 'react';
import PropTypes from 'prop-types';
export class PropTypesComponent extends React.Component {
    static propTypes = {
        headerText: PropTypes.string,
        lat: PropTypes.number,
        lng: PropTypes.number,
        zoom: PropTypes.number,
        place: PropTypes.object,
        markers: PropTypes.array,
    }
    static defaultProps = {
        headerText: "Default text"
    };
    render() {
        return (
            <h1>{this.props.headerText}</h1>
        );
    }
}

export default PropTypesComponent;