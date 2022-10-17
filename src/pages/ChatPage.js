
import React from "react";

import { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import MessagesList from '../components/MessagesList';
import ChatList from '../components/ChatList';


import { useDispatch, useSelector } from 'react-redux';


const ChatPage = () => {
    const refMessageText = useRef(null);
    const chats = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();


    const [messageText, setMessageText] = useState('');
    const [messageAuthor, setMessageAuthor] = useState('');
    const [nameNewChat, setNameNewChat] = useState('');


    // console.log(chats);

    let { idChat } = useParams();
    // Проверка на наличие чата
    let index = chats.findIndex(el => el.id === +idChat);
    if (!chats[index]) {
        index = 0;
    }


    function sendMessage() {

        dispatch({ type: 'addMessage', index: index, messageText: messageText, messageAuthor: messageAuthor })

        setMessageText('');
        setMessageAuthor('');
        focusFieldMessage();
        robotAnswer();
    }


    useEffect(() => {
        focusFieldMessage();
    }, []);


    function robotAnswer() {
        dispatch ({
            type: 'robotAnswer',
            index: index,
            meta: {
                delayMs: 1000
            }
        })
    }


    function focusFieldMessage() {
        refMessageText.current.focus();
    }


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'baseline' }}>

                    <Box sx={{ m: 1, width: 200 }} >
                        <h4>Список чатов</h4>
                        <div className="chat-list">
                            <ChatList chatList={chats} />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Название чата" variant="outlined" size="small"
                                value={nameNewChat} onChange={(event) => setNameNewChat(event.target.value)} />
                        </div>
                        <br />
                        <div>
                            <Button variant="contained" onClick={() => dispatch({ type: 'addChat', payload: nameNewChat })}>Новый чат</Button>
                        </div>
                    </Box>

                    <Box sx={{ m: 0.5 }} borderLeft={1} p={2}>
                        <h4>Сообщения</h4>
                        <div className="message-list">
                            <MessagesList messList={chats[index].messages} index={index} />
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
                                <Button variant="contained" onClick={(e) => sendMessage()}>Отправить</Button>
                            </div>

                        </div>
                    </Box>
                </Box>
            </Box>


        </div>
    )
}

export default ChatPage
