import { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import MessagesList from '../components/MessagesList';
import ChatList from '../components/ChatList';

import { initMessageTracking, initChatTracking, addMessageWithFirebase, addChatWithFirebase } from "../store/chat2Actions";
import { useDispatch, useSelector } from 'react-redux';


const ChatPage = () => {

    const { chatId } = useParams();

    const dispatch = useDispatch();
    const refMessageText = useRef(null);

    // const chats = useSelector(getChatList);
    const messageList = useSelector((state) => state.messages.messages);
    const chatsList = useSelector((state) => state.chats.chats);
    const messages = messageList.messages[chatId];


    const [messageText, setMessageText] = useState('');
    const [messageAuthor, setMessageAuthor] = useState('User');
    const [nameNewChat, setNameNewChat] = useState('');


    const onAddMessage = () => {
        dispatch(
            addMessageWithFirebase(chatId, {
                id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
                author: messageAuthor,
                text: messageText,
                date: Date.now(),
            })
        );
    };

    const onAddChat = () => {
        dispatch(
            addChatWithFirebase(Date.now(), {
                id: Date.now(),
                name: nameNewChat,
            })
        );
    };


    useEffect(() => {
        dispatch(initMessageTracking());
        dispatch(initChatTracking());


    }, []);

    const chatEnable = () => {
        const chats = chatsList.chats;
        if (chats.findIndex(chat => chat.id === +chatId) !== -1) {
            return true;
        }
        return false;
    };





    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'baseline' }}>

                    <Box sx={{ m: 1, width: 200 }} >
                        <h4>Список чатов</h4>
                        <div className="chat-list">
                            <ChatList chatsList={chatsList} />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Название чата" variant="outlined" size="small"
                                value={nameNewChat} onChange={(event) => setNameNewChat(event.target.value)} />
                        </div>
                        <br />
                        <div>
                            <Button variant="contained" onClick={() => onAddChat()}>Новый чат</Button>
                        </div>
                    </Box>


                    <Box sx={{ m: 0.5 }} borderLeft={1} p={2} className={!chatEnable() ? 'disable' : undefined}>
                        <h4>Сообщения</h4>
                        <div className="message-list">
                            <MessagesList messages={messages} chatId={chatId} />
                        </div>

                        <div>
                            <div>
                                <TextField label="Multiline" multiline maxRows={4} variant="filled" sx={{ width: 300 }}
                                    inputRef={refMessageText}
                                    value={messageText} onChange={(event) => setMessageText(event.target.value)} />
                            </div>
                            <br />
                            <div>
                                <TextField id="outlined-basic" label="Автор" variant="outlined" size="small"
                                    value={messageAuthor} onChange={(event) => setMessageAuthor(event.target.value)} />
                            </div>

                            <br />
                            <div>
                                <Button variant="contained" onClick={(e) => onAddMessage()}>Отправить</Button>
                            </div>

                        </div>
                    </Box>
                </Box>
            </Box>


        </div>
    )


}


export default ChatPage
