import React from 'react';
import NoBrowser from './no.browser'
class MecanicoPDF extends React.Component {
    render () {
        return (
            <object data="./static/rubros.pdf/mecanico.pdf" type="application/pdf" width="100%" height="600px">
                <NoBrowser href="./static/rubros.pdf/mecanico.pdf"></NoBrowser>
            </object>
        );
    }
}

export default MecanicoPDF
