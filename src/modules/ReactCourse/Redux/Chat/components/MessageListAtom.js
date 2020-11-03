import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    listItem: {
        marginBottom: theme.spacing(1),
        backgroundColor: grey[100],
    },
}));

const MessageListAtom = (props) => {
    const classes = useStyles();
    return <List>{
        props.messages.map((message, index) => (
            <ListItem className={classes.listItem} key={index} alignItems="flex-start">
                <ListItemText primary={message.text}
                    secondary={message.timestamp} />
                <ListItemSecondaryAction >
                    <IconButton edge="end" aria-label="add" size="small" onClick={() => props.onClick(message.id)} >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
};

export default MessageListAtom;