import React from 'react';
import MultipleFields from './MultipleFields'
import FormFieldComponent from './FormFieldComponent'

export class Forms extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            names: [],
        };
    }
    onButtonClick = (evt) => {
        const btn = evt.target;
        console.log(`The user clicked ${btn.name}: ${btn.value}`);
    }
    onFormSubmit = (evt) => {
        const names = [...this.state.names, this.state.name];
        this.setState({ names: names, name: '' });
        evt.preventDefault();
    }
    onNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    };

    static displayName = "04-basic-input";

    render() {
        return (
            <div>
                <h1>What do you think of React?</h1>
                <button
                    name='button-1'
                    value='great'
                    onClick={this.onButtonClick}
                >
                    Great
                </button>

                <button
                    name='button-2'
                    value='amazing'
                    onClick={this.onButtonClick}
                >
                    Amazing
                </button>
                <br></br>
                <div>
                    <h1>Uncontrolled vs. Controlled Components</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <input
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                        <input type='submit' />
                    </form>
                </div>
                <div>
                    <h3>Names</h3>
                    <ul>
                        {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
                    </ul>
                </div>
                <MultipleFields></MultipleFields>
                <FormFieldComponent></FormFieldComponent>
            </div>
        );
    }
}

export default Forms;





