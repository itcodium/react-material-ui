import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import isEmail from 'validator/lib/isEmail';
import FieldComponent from './FieldComponent'
import CourseSelect from './CourseSelect'
import Service from './Service'
export class FormComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            people: [],
            person: {
                author: '',
                title: '',
                email: 'department@test.com',
                department: '',
                course: ''
            },
            fieldErrors: {},
            _loading: false,
            _saveStatus: 'READY',
        };

    }
    service = new Service();
    onFormSubmit = (evt) => {
        const person = this.state.person;
        evt.preventDefault();
        if (this.validate()) return;

        const people = [...this.state.people, person];

        this.setState({ _saveStatus: 'SAVING' });
        this.service.peopleSave(person)
            .then((response) => {
                this.setState({
                    people: people,
                    person: {
                        author: '',
                        title: '',
                        email: '',
                        course: '',
                        department: ''
                    },
                    _saveStatus: 'SUCCESS',
                });
            })
            .catch((err) => {
                this.setState({ _saveStatus: 'ERROR' });
            });
    }

    onInputChange = ({ name, value, error }) => {
        const person = this.state.person;
        const fieldErrors = this.state.fieldErrors;
        person[name] = value;
        fieldErrors[name] = error;
        this.setState({ person, fieldErrors , _saveStatus: 'READY'});
    };

    validate = () => {
        const person = this.state.person;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k])
        if (!person.author) return true;
        if (!person.title) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errMessages.length) return true;
        return false
    };
    componentDidMount() {
        this.setState({ _loading: true });
        this.service.peopleGetAll().then((people) => {
            this.setState({ _loading: false, people: people });
        });
    }
    render() {
        if (this.state._loading) {
            return <CircularProgress></CircularProgress>
        }

        return (
            <div>
                <Typography variant="h2" component="h3">Multiple Field Component</Typography>
                <form onSubmit={this.onFormSubmit}>
                    <FieldComponent
                        placeholder='Author'
                        name={'author'}
                        value={this.state.person.author}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Author Required')}
                    />
                    <br />
                    <FieldComponent
                        placeholder='Title'
                        name={'title'}
                        value={this.state.person.title}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Title Required')}
                    />
                    <br />
                    <FieldComponent
                        placeholder='Email'
                        name={'email'}
                        value={this.state.person.email}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
                    />
                    <br />
                    <CourseSelect
                        department={this.state.person.department}
                        course={this.state.person.course}
                        onChange={this.onInputChange}
                    />
                    <br />
                    {{
                        SAVING: <input value='Saving...' type='submit' disabled />,
                        SUCCESS: <input value='Saved!' type='submit' disabled />,
                        ERROR: <input
                            value='Save Failed - Retry?'
                            type='submit'
                            disabled={this.validate()}
                        />,
                        READY: <input
                            value='Submit'
                            type='submit'
                            disabled={this.validate()}
                        />,
                    }[this.state._saveStatus]}

                </form>
                <div>
                    <h3>People</h3>
                    {
                        this.state.people.length ?
                            <ul>
                                {this.state.people.map(({ author, email, title, department, course }, i) =>
                                    <li key={i}>{[author, email, title, department, course].join(' - ')}</li>
                                )}
                            </ul> : ''
                    }

                </div>
            </div>
        );
    }
}

export default FormComponent;





