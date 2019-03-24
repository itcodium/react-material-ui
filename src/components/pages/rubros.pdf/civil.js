

import React from 'react';
import NoBrowser from './no.browser'
class CivilPDF extends React.Component {
    render () {
        return (
            <object data="./static/rubros.pdf/civil.pdf" type="application/pdf" width="100%" height="600px">
                <NoBrowser href="./static/rubros.pdf/civil.pdf"></NoBrowser>
            </object>
        );
    }
}

export default CivilPDF
