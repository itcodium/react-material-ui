import React from 'react';
import Typography from '@material-ui/core/Typography';
import isEmail from 'validator/lib/isEmail';
import FieldComponent from './FieldComponent'
export class FormFieldComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            fields: {
                name: '',
                email: ''
            },
            fieldErrors: {},
            people: [],
        };
    }
    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;
        evt.preventDefault();
        console.log("onFormSubmit",1)
        if (this.validate()) return;
        console.log("onFormSubmit",2)
        this.setState({ people: people.concat(person), fields: { name: '', email: '' } });
    }
    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        fields[name] = value;
        fieldErrors[name] = error;
        this.setState({ fields, fieldErrors });
    };

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k])

        if (!person.name) return true;
        if (!person.email) return true;
        if (errMessages.length) return true;
        return false
    };

    static displayName = "04-basic-input";

    render() {
        return (
            <div>

                <Typography variant="h2" component="h4">Multiple Field Component</Typography>

                <form onSubmit={this.onFormSubmit}>
                   <p> {this.state.fields.name} {this.state.fields.email}</p>
                    <FieldComponent
                        placeholder='Name'
                        name={'name'}
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Name Required')}
                    />

                    <br />
                    <FieldComponent
                        placeholder='Email'
                        name={'email'}
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
                    />
                    <br />
                    <input type='submit' disabled={this.validate()} />
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({ name, email }, i) =>
                            <li key={i}>{name} ({email})</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FormFieldComponent;





