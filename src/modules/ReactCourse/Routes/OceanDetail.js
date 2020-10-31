
import React from 'react';
import Typography from '@material-ui/core/Typography';
class OceanDetail extends React.Component {
    checkName() {
        if (this.props.name) {
            return <Typography color="red" variant="h6" display="inline"> {this.props.name}</Typography>
        }
    }
    render() {
        return (
            <div>

                <h3>Ocean {this.checkName()} Hello!</h3>
                <p>
                    The <b>{this.checkName()}</b> Ocean covers approximately 1/5th of the
                    surface of the earth.
                </p>

            </div>
        )
    }
}

export default OceanDetail; 