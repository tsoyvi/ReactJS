
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
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    console.log(chats);

    const [messageText, setMessageText] = useState('');
    const [messageAuthor, setMessageAuthor] = useState('');
    const [nameNewChat, setNameNewChat] = useState('');
    /*
        const [chatList, setChatList] = useState(
            [
            {
                id: 1,
                name: 'Общий',
                messages: [{ id: 1, text: "Добро пожаловать в Общий чат", author: '' }],
            },
        ]
        );
    */

    
        let { idChat } = useParams();
        // Проверка на наличие чата
        let index = chats.findIndex(el => el.id === +idChat);
        if (!chats[index]) {
            index = 0;
        }
        console.log(index);
    

    /*
        function sendMessage(text, author) {
    
            const lastId = chatList[index].messages.length + 1;
    
            console.log(lastId);
    
            setChatList(chatList => {
                const chatListCopy = [...chatList]
    
                chatListCopy[index] = {
                    ...chatListCopy[index],
                    messages:
                        [...chatList[index].messages,
                        {
                            id: lastId,
                            text: text,
                            author: author
                        }]
                }
                return chatListCopy
            }
    
            );
    
            setMessageText('');
            setMessageAuthor('');
            focusFieldMessage();
        }
    */
    /*
    
        useEffect(() => {
            setTimeout(() => {
                robotAnswer();
            }, 3000)
        }, [chatList]);
    */
    
        useEffect(() => {
            focusFieldMessage();
        }, []);
    
    /*
        function robotAnswer() {
            const lastAuthor = chatList[index].messages[chatList[index].messages.length - 1];
            if (lastAuthor && lastAuthor.author) {
                sendMessage('Ок', '');
            }
        }
    */
    
        function focusFieldMessage() {
            refMessageText.current.focus();
        }
    /*
    
        function lastIdChats() {
            let lastId = chatList[chatList.length - 1].id;
            return ++lastId;
        }
    
    
        function createNewChat() {
            console.log(lastIdChats());
            const obj = {
                id: lastIdChats(),
                name: nameNewChat,
                messages: [{ id: 1, text: `Добро пожаловать в ${nameNewChat} чат`, author: '' }],
            };
    
            setChatList([...chatList, obj]);
    
            setNameNewChat('');
    
        }
    
    
    
    <Button variant="contained" onClick={(e) => createNewChat()}>Новый чат</Button>
    onClick={(e) => sendMessage(messageText, messageAuthor)}
    
    <ChatList chatList={chats} />
    <MessagesList messList={chats[0].messages} />
    */
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

                        </div>
                    </Box>

                    <Box sx={{ m: 0.5 }} borderLeft={1} p={2}>
                        <h4>Сообщения</h4>
                        <div className="message-list">
                             <MessagesList messList={chats[index].messages} />
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
                                <Button variant="contained" >Отправить</Button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>


        </div>
    )
}

export default ChatPage
