import React from 'react';
import PropTypes from 'prop-types';
export class FieldComponent extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            error: false,
        };
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        else return null;
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
           this.setState({ value:this.props.value });
        }
    }
    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;
        this.setState({ value, error });
        this.props.onChange({ name, value, error });
    }
    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;
        this.setState({ value, error });
        this.props.onChange({ name, value, error });
    }
    render() {
        return (
            <div>
                <input
                    placeholder={this.props ? this.props.placeholder : null}
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <span style={{ color: 'red' }}>{this.state.error}</span>
            </div>
        );
    }
}

export default FieldComponent;





