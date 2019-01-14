import React from 'react';
import PropTypes from 'prop-types';
import { ApiCaller } from './caller';
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

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';


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
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: green[600],
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
        open: true,
        fields: {
            nombre: '',
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
            nombre: { error: false, message: '' },
            email: { error: false, message: '' },
            mensaje: { error: false, message: '' }
        }
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };

    resetError = (name) => {
        this.state.fieldErrors[name] = { error: false, message: '' }
    }
    setError = (name, msg) => {
        this.state.fieldErrors[name].error = true;
        this.state.fieldErrors[name].message = msg
    }

    handleBlur = (field) => {
        console.log("handleBlur", field)
    }

    validate = (name) => {
        // nombre
        var errors = this.state.fieldErrors;
        if (!name || name == "nombre") {
            if (!this.state.fields.nombre) {
                this.setError("nombre", 'El nombre es requerido')
            } else {
                this.resetError("nombre")
            }
        }
        // email
        if (!name || name == "email") {
            if (!this.state.fields.email) {
                this.setError("email", 'El email es requerido')
            } else {
                if (this.state.fields.email && !isEmail(this.state.fields.email)) {
                    this.setError("email", 'El valor ingredado no es un email valido.')
                } else {
                    this.resetError("email")
                }
            }
        }
        // mensaje
        if (!name || name == "mensaje") {
            if (!this.state.fields.mensaje) {
                this.setError("mensaje", 'Ingresar mensaje')
            } else {
                this.resetError("mensaje")
            }

        }
        console.log("fields.nombre", name)
        return errors;
    }
    handleChange = name => event => {
        const fields = this.state.fields;
        fields[name] = event.target.value;
        this.setState({ fields });
        if (name) {
            this.validate(name)
        }
    };
    handleCheckChange = name => event => {
        const fields = this.state.fields;
        fields[event.target.name] = event.target.checked;
        this.setState({ fields });
    };
    handleSubmit = (evt) => {
        const data = this.state.fields;
        console.log("Submit", data)
        const fieldErrors = this.validate();
        this.setState({ fieldErrors });

        var keys = Object.keys(fieldErrors);
        for (var i = 0; i < keys.length; i++) {
            if (fieldErrors[keys[i]].error) {
                console.log("Error: ", fieldErrors[keys[i]].error)
                return;
            }
        }
        console.log("ERRORS -> ", fieldErrors, Object.keys(fieldErrors))
        //if (Object.keys(fieldErrors).length) return;
        new ApiCaller().post("http://patagoniacamelot.e-zero.com.ar/contacto/contact.php", data,
            function (res) {
                console.log("RES->", res)
            }, function (res) {
                console.log("Error RES->", res)
            })
        evt.preventDefault();
    }

    render () {
        const { classes } = this.props;
        const { reserva, info } = this.state.fields;
        //const error = [reserva, info].filter(v => v).length !== 2;  error={ true }
        return (
            <div>
                <form className={ classes.container } noValidate autoComplete="off">
                    <Grid container spacing={ 8 }  >
                        <Typography className={ classes.group } variant="overline" gutterBottom>
                            Mensaje:
                    </Typography>

                        <Grid item className={ classes.ml } xs={ 12 } sm={ 12 }>
                            <FormControl fullWidth className={ classes.formControl } aria-describedby="nombre-text">
                                <InputLabel htmlFor="nombre">Nombre</InputLabel>
                                <Input required={ true }
                                    type="text"
                                    id="nombre"
                                    value={ this.state.fields.nombre }
                                    onChange={ this.handleChange('nombre') } />
                                <FormHelperText id="nombre-text" error={ this.state.fieldErrors.nombre.error } >{ this.state.fieldErrors.nombre.message }</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item className={ classes.ml } xs={ 12 } sm={ 12 }>
                            <FormControl fullWidth className={ classes.formControl } aria-describedby="email-text">
                                <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                                <Input required={ true }
                                    type="text"
                                    id="email"
                                    value={ this.state.fields.email }
                                    onChange={ this.handleChange('email') } />
                                <FormHelperText id="email-text" error={ this.state.fieldErrors.email.error }>{ this.state.fieldErrors.email.message }</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item className={ classes.ml } xs={ 12 } sm={ 12 }>
                            <FormControl fullWidth className={ classes.formControl } aria-describedby="mensaje-text">
                                <InputLabel htmlFor="mensaje">Mensaje</InputLabel>
                                <Input required multiline fullWidth rows="4" margin="dense"
                                    type="text"
                                    id="mensaje"
                                    value={ this.state.fields.mensaje }
                                    onChange={ this.handleChange('mensaje') } />
                                <FormHelperText id="mensaje-text" error={ this.state.fieldErrors.mensaje.error } >{ this.state.fieldErrors.mensaje.message }</FormHelperText>
                            </FormControl>
                        </Grid>


                        <Grid hidden item className={ classes.ml } xs={ 12 }  >
                            <Typography className={ classes.group } variant="overline" gutterBottom>
                                Datos del contacto
                    </Typography>
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

                        <Grid hidden className={ classes.ml } container spacing={ 8 } >

                            <Grid hidden item xs={ 12 } sm={ 6 }>
                                <Typography hidden className={ classes.group } variant="overline" gutterBottom>
                                    Indique el motivo de su consulta:
                    </Typography>
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
                        <Grid hidden item className={ classes.ml } xs={ 12 } sm={ 6 }>
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

                <Snackbar
                    className={ classes.success }
                    variant="success"
                    anchorOrigin={ {
                        vertical: 'bottom',
                        horizontal: 'left',
                    } }
                    open={ this.state.open }
                    autoHideDuration={ 3000 }
                    onClose={ this.handleClose }
                    ContentProps={ {
                        'aria-describedby': 'message-id',
                    } }
                    message={ <span id="message-id">Note archived</span> }
                    action={ [
                        <Button key="undo" color="secondary" size="small" onClick={ this.handleClose }>
                            UNDO
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={ classes.close }
                            onClick={ this.handleClose }
                        >
                            <CloseIcon />
                        </IconButton>,
                    ] }
                />
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
