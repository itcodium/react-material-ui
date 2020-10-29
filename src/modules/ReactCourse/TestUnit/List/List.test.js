import React from 'react';
import ReactDOM from 'react-dom';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import List from './List';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
});
describe('<List/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<List />);
    });
    it('should have the `th` "Items"', () => {
        expect(wrapper.contains(<th>Items</th>)).toBe(true);
    });
    it('should have a `button` element', () => {
        expect(
            wrapper.containsMatchingElement(
                <button disabled={true}>Add item</button>
            )
        ).toBe(true);
    });
    it('`button` should be disabled', () => {
        const button = wrapper.find('button').first();
        expect(
            button.props().disabled
        ).toBe(true);
    });
    it('should have an `input` element', () => {
        expect(
            wrapper.containsMatchingElement(<input />)
        ).toBe(true);
    });

    describe('the user populates the input', () => {
        const item = 'Vancouver';
        beforeEach(() => {
            const input = wrapper.find('input').first();
            input.simulate('change', {
                target: { value: item }
            })
        })
        it('should update the state property `item`', () => {
            expect(
                wrapper.state().item
            ).toEqual(item);
        });
        it('should enable `button`', () => {
            const button = wrapper.find('button').first();
            expect(
                button.props().disabled
            ).toBe(false);
        });
    });
});
