import React from 'react';

export class CourseSelect extends React.Component {
    state = {
        items: [],
        item: '',
    };
    onItemChange = (e) => {
        this.setState({
            item: e.target.value,
        });
    };
    addItem = (e) => {
        e.preventDefault();
        this.setState({
            items: this.state.items.concat(
                this.state.item
            ),
            item: '',
        });
    };
    render() {
        const submitDisabled = !this.state.item;
        return (
            <div>
                <form
                    className='ui form'
                    onSubmit={this.addItem}
                >
                    <div className='field'>
                        <input
                            className='prompt'
                            type='text'
                            placeholder='Add item...'
                            value={this.state.item}
                            onChange={this.onItemChange}
                        />
                    </div>
                    <button
                        className='ui button'
                        type='submit'
                        disabled={submitDisabled}
                    >
                        Add item
                    </button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((item, idx) => (
                                <tr
                                    key={idx}
                                >
                                    <td>{item}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseSelect;





