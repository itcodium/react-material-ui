import Container from '@material-ui/core/Container';
import TextFieldSubmit from './TextFieldSubmit';
import MessageListAtom from './MessageListAtom';

const Thread = (props) => {
    return <Container component="main" maxWidth="sm">
        <TextFieldSubmit onSubmit={props.onMessageSubmit} threadId={props.thread.id} />
        <MessageListAtom
            messages={props.thread.messages}
            onClick={props.onMessageClick}>
        </MessageListAtom>
    </Container>
};
export default Thread;