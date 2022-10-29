import List from '@mui/material/List';
import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';

function ChatList(props) {


    const chatsList = props.chatsList.chats;

    if (chatsList === undefined) {
        return (<></>);
    }



    return (
        <List>
            {Object.keys(chatsList).map((id) =>
                <ListItem key={id}>
                    <Link to={`/chats-2/${chatsList[id].id}`}>{chatsList[id].name}</Link>
                </ListItem>
            )}
        </List>
    );

}

export default ChatList;
