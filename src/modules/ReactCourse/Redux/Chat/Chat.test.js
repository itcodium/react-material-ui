import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import chatReducer from './Chat.reducer'
import chatCreateStore from './Chat.store'

configure({ adapter: new Adapter() });
describe('- Chat', () => {
    const addMessageAction1 = { type: 'ADD_MESSAGE', message: 'How does it look, Neil?', };
    const addMessageAction2 = { type: 'ADD_MESSAGE', message: 'Looking good.' };
    const deleteMessageAction = { type: 'DELETE_MESSAGE', index: 0, };

    let storeChat = chatCreateStore(chatReducer, { messages: [] });
    let listener = () => {
        console.log('Current state: ', storeChat.getState());
    };
    storeChat.subscribe(listener);

    it('Add first message', () => {
        storeChat.dispatch(addMessageAction1);
        expect(
            storeChat.getState().messages[0]
        ).toBe(addMessageAction1.message);
    });
    it('Add second message', () => {
        storeChat.dispatch(addMessageAction2);
        expect(
            storeChat.getState().messages[1]
        ).toBe(addMessageAction2.message);
    });
    it('Delete First message', () => {
        storeChat.dispatch(deleteMessageAction);
        expect(
            storeChat.getState().messages[0]
        ).toBe(addMessageAction2.message);
    });
});
