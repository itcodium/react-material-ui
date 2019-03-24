

import React from 'react';
import NoBrowser from './no.browser'
class ElectricoPDF extends React.Component {
    render () {
        return (
            <object data="./static/rubros.pdf/electrico.pdf" type="application/pdf" width="100%" height="600px">
                <NoBrowser href="./static/rubros.pdf/electrico.pdf"></NoBrowser>
            </object>
        );
    }
}

export default ElectricoPDF
