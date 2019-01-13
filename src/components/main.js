import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    submit: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        marginTop: theme.spacing.unit * 4,
        fontWeight: 600

    },
    ml: {
        marginLeft: theme.spacing.unit * 1,
    },
    root: {
        flexGrow: 1,
    },
    textField: {
        fontSize: 36,
        fontWeight: 1000
    },
    section1: {
        margin: `${ theme.spacing.unit * 3 }px ${ theme.spacing.unit * 2 }px`,
    },

});


var isEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

class TextFields extends React.Component {
    state = {
        fields: {
            nombreyapellido: '',
            email: '',
            mensaje: '',
            telefono: '',
            ciudad: '',
            pais: '',
            info: false,
            reserva: false,
            huespedes: '',

        },
        loading: null,
        fieldErrors: {
            nombreyapellido: { error: false, message: '' }
        }
    };



    validate = (fields) => {
        const errors = {};

        if (!fields.nombreyapellido) {
            errors.nombreyapellido = { error: true, message: 'Name Required' }
        } else {
            errors.nombreyapellido = { error: false, message: '' }
        }
        console.log("fields.nombreyapellido", fields.nombreyapellido, errors.nombreyapellido)
        if (!fields.email) errors.email = 'Email Required';
        if (fields.email && !isEmail(fields.email)) errors.email = 'Invalid Email';
        return errors;
    }

    handleChange = name => event => {
        const fields = this.state.fields;
        fields[name] = event.target.value;
        this.setState({ fields });
        const fieldErrors = this.validate(this.state.fields);
        this.setState({ fieldErrors });

    };

    handleCheckChange = name => event => {
        const fields = this.state.fields;
        fields[event.target.name] = event.target.checked;
        this.setState({ fields });
    };






    handleSubmit = (evt) => {

        const data = this.state.fields;
        // const fieldErrors = this.validate(person);
        console.log("Submit", data)
        const fieldErrors = this.validate(data);
        this.setState({ fieldErrors });
        if (Object.keys(fieldErrors).length) return;
        evt.preventDefault();

        /*
        const { nombreyapellido, email, mensaje, telefono,
            ciudad, pais, info, reserva, huespedes } = this.state.fields

        this.setState({ loading: true })
        console.log("Submit", this.state)
        */

    }

    render () {
        const { classes } = this.props;
        const { reserva, info } = this.state.fields;

        //const error = [reserva, info].filter(v => v).length !== 2;  error={ true }
        return (


            <form className={ classes.container } noValidate autoComplete="off">

                <Grid container spacing={ 8 }  >
                    <Typography className={ classes.group } variant="overline" gutterBottom>
                        Mensaje:
                    </Typography>

                    <Grid item className={ classes.ml } xs={ 12 } sm={ 12 }>
                        <FormControl error={ this.state.fieldErrors.nombreyapellido.error } className={ classes.formControl } aria-describedby="nombreyapellido-text">
                            <InputLabel htmlFor="nombreyapellido">Nombre y Apellido</InputLabel>
                            <Input required
                                type="text"
                                id="nombreyapellido"
                                value={ this.state.fields.nombreyapellido }
                                onChange={ this.handleChange('nombreyapellido') } />
                            <FormHelperText id="nombreyapellido-text">{ this.state.fieldErrors.nombreyapellido.message }</FormHelperText>
                        </FormControl>

                    </Grid>
                    <Grid item className={ classes.ml } xs={ 12 } sm={ 12 }>
                        <TextField
                            required
                            name="email"
                            label="Correo electrónico"
                            type="text"
                            margin="dense"
                            fullWidth
                            value={ this.state.fields.email }
                            onChange={ this.handleChange('email') }
                        />
                    </Grid>
                    <Grid item className={ classes.ml } xs={ 12 } sm={ 12 }>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Mensaje"
                            required
                            multiline
                            fullWidth
                            rows="4"
                            name="mensaje"
                            onChange={ this.handleChange('mensaje') }
                            margin="dense" />
                    </Grid>

                    <Typography className={ classes.group } variant="overline" gutterBottom>
                        Datos del contacto:
                    </Typography>
                    <Grid item className={ classes.ml } xs={ 12 }  >
                        <Grid item xs={ 12 } sm={ 3 }>
                            <TextField
                                name="telefono"
                                label="Teléfono"
                                type="text"
                                fullWidth
                                value={ this.state.fields.telefono }
                                onChange={ this.handleChange('telefono') }
                                margin="dense" />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 3 }>
                            <TextField
                                name="ciudad"
                                label="Ciudad"
                                type="text"
                                value={ this.state.fields.ciudad }
                                fullWidth
                                onChange={ this.handleChange('ciudad') }
                                margin="dense" />
                        </Grid>
                        <Grid item xs={ 12 } sm={ 3 }>
                            <TextField
                                name="pais"
                                label="Pais"
                                type="text"
                                fullWidth
                                value={ this.state.fields.pais }
                                onChange={ this.handleChange('pais') }
                                margin="dense" />
                        </Grid>
                    </Grid>



                    <Typography className={ classes.group } variant="overline" gutterBottom>
                        Indique el motivo de su consulta:
                    </Typography>
                    <Grid className={ classes.ml } container spacing={ 8 } >
                        <Grid item xs={ 12 } sm={ 6 }>
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
                            <TextField
                                id="standard-number"
                                name="huespedes"
                                label="Cantidad de huéspedes:"
                                value={ this.state.fields.huespedes }
                                onChange={ this.handleChange('huespedes') }
                                type="number"
                                InputLabelProps={ {
                                    shrink: true,
                                } }
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item className={ classes.ml } xs={ 12 } sm={ 6 }>
                        <TextField
                            name="fechaIngreso"
                            label="Fecha de ingreso"
                            placeholder="dd/mm/aaaa"
                            InputLabelProps={ {
                                shrink: true,
                            } }
                            fullWidth
                            margin="normal"

                        />
                        <TextField
                            label="Fecha de egreso"
                            name="fechaEgreso"
                            placeholder="dd/mm/aaaa"
                            InputLabelProps={ {
                                shrink: true,
                            } }
                            fullWidth
                            margin="normal"
                        />
                    </Grid>


                </Grid>
                <Grid container direction="row" justify="center" alignItems="stretch">
                    <Button onClick={ this.handleSubmit } type="button" className={ classes.submit } margin="dense" variant="contained" color="primary" >
                        Enviar
                            </Button>
                </Grid>


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
    required
    error={ this.state.fieldErrors.nombreyapellido.error }
    name="nombreyapellido"
    label="Nombre y Apellido"
    type="text"
    fullWidth
    value={ this.state.fields.nombreyapellido }
    onChange={ this.handleChange('nombreyapellido') }
/>

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