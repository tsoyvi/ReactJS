import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function ChatList(props) {
    return (
        <List>
            {props.chatList.map((item) =>
                <ListItem key={item.id}>
                    <h5>{item.name}</h5>
                </ListItem>
            )}
        </List>
    );
}

export default ChatList;