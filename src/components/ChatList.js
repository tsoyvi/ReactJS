import List from '@mui/material/List';
import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';

function ChatList(props) {
    return (
        <List>
            {props.chatList.map((item) =>
                <ListItem key={item.id}>
                    <Link to={`/chats/${item.id}`}>{item.name}</Link>
                </ListItem>
            )}
        </List>
    );
}

export default ChatList;