

import React from 'react';
import NoBrowser from './no.browser'
class InstrumentacionPDF extends React.Component {
    render () {
        return (
            <object data="./static/rubros.pdf/instrumentacion.pdf" type="application/pdf" width="100%" height="600px">
                <NoBrowser href="./static/rubros.pdf/instrumentacion.pdf"></NoBrowser>
            </object>
        );
    }
}

export default InstrumentacionPDF
