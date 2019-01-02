import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    submit: {
        margin: theme.spacing.unit * 3,

    },
    root: {
        flexGrow: 1,
    }
});


class TextFields extends React.Component {
    state = {
        nombreyapellido: '',
        email: '',
        mensaje: '',
        telefono: '',
        ciudad: '',
        pais: '',
        info: false,
        reserva: false,
        huespedes: '',
        loading: null,
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleCheckChange = name => event => {
        this.setState({
            [name]: event.target.checked
        });
    };

    handleSubmit = () => {
        /*const { nombreyapellido, email, mensaje, telefono,
            ciudad, pais, info, reserva, huespedes } = this.state
            */
        this.setState({ loading: true })
        console.log("Submit", this.state)

    }

    render () {
        const { classes } = this.props;
        const { reserva, info } = this.state;
        //const error = [reserva, info].filter(v => v).length !== 2;
        return (
            <form className={ classes.container } noValidate autoComplete="off">
                <div className={ classes.root } style={ { padding: 0, margin: 0 } }>
                    <Grid container spacing={ 8 }>
                        <Grid item xs={ 12 } sm={ 8 }>
                            <TextField
                                required
                                error={ true }
                                name="nombreyapellido"
                                label="Nombre y Apellido"
                                type="text"
                                fullWidth
                                value={ this.state.nombreyapellido }
                                InputLabelProps={ { shrink: true } }
                                onChange={ this.handleChange('nombreyapellido') }
                                margin="dense" />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 8 }>
                            <TextField
                                required
                                name="email"
                                label="Correo electrónico"
                                type="text"
                                fullWidth
                                value={ this.state.email }
                                InputLabelProps={ { shrink: true } }
                                onChange={ this.handleChange('email') }
                                margin="dense" />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Mensaje"
                                required
                                multiline
                                fullWidth

                                rows="4"
                                name="mensaje"
                                InputLabelProps={ { shrink: true, } }
                                onChange={ this.handleChange('mensaje') }
                                margin="dense" />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 4 }>
                            <TextField
                                name="telefono"
                                label="Teléfono"
                                type="text"
                                fullWidth
                                value={ this.state.telefono }
                                onChange={ this.handleChange('telefono') }
                                margin="dense" />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 4 }>
                            <TextField
                                name="ciudad"
                                label="Ciudad"
                                type="text"
                                value={ this.state.ciudad }
                                fullWidth
                                onChange={ this.handleChange('ciudad') }
                                margin="dense" />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 4 }>
                            <TextField
                                name="pais"
                                label="Pais"
                                type="text"
                                fullWidth
                                value={ this.state.pais }
                                onChange={ this.handleChange('pais') }
                                margin="dense" />
                        </Grid>

                        <Grid item xs={ 12 }>
                            <p > <b> Indique el motivo de su consulta:</b></p>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 4 }>
                            <FormControl component="fieldset" >
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="info" checked={ info } onChange={ this.handleCheckChange('info') } value="SOLICITUD DE INFORMACIÓN" />
                                        }
                                        label="Solicitud De Informacíon"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="reserva" checked={ reserva } onChange={ this.handleCheckChange('reserva') } value="RESERVA" />
                                        }
                                        label="Reserva"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 2 }>
                            <TextField
                                id="standard-number"
                                name="huespedes"
                                label="Cantidad de huéspedes:"
                                value={ this.state.huespedes }
                                onChange={ this.handleChange('huespedes') }
                                type="number"
                                InputLabelProps={ {
                                    shrink: true,
                                } }
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 2 }>
                            <TextField
                                name="fechaIngreso"
                                label="Fecha de ingreso"
                                placeholder="dd/mm/aaaa"
                                InputLabelProps={ {
                                    shrink: true,
                                } }
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 2 }>
                            <TextField
                                label="Fecha de egreso"
                                name="fechaEgreso"
                                placeholder="dd/mm/aaaa"
                                InputLabelProps={ {
                                    shrink: true,
                                } }
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="stretch">
                        <Button type="button" onClick={ this.handleSubmit } className={ classes.submit } margin="dense" variant="contained" color="primary" >
                            Enviar
                            </Button>
                    </Grid>
                </div>



            </form >

        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);


/*

<TextField
        id="standard-search"
        label="Search field"
        type="search"

        margin="normal"
    />
    <TextField
        id="standard-select-currency"
        select
        label="Select"

        value={ this.state.currency }
        onChange={ this.handleChange('currency') }
        SelectProps={ {
            MenuProps: {
                className: classes.menu,
            },
        } }
        helperText="Please select your currency"
        margin="normal">
        { currencies.map(option => (
            <MenuItem key={ option.value } value={ option.value }>
                { option.label }
            </MenuItem>
        )) }
    </TextField>

    <Grid item xs={ 12 } sm={ 6 }>
        <Paper className={ classes.paper }>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={ 12 } sm={ 6 }>
        <Paper className={ classes.paper }>xs=12 sm=6</Paper>
    </Grid>



    <TextField
        id="standard-name"
        label="Name"
        error
        disabled
        type="text"
        fullWidth
        defaultValue=" "
        placeholder="Placeholder"

        value={ this.state.name }
        InputProps={ {
            readOnly: true,
        } }

        onChange={ this.handleChange('name') }
        margin="normal"
        helperText="Some important text"
    />
    */