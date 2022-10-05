
import React from "react";

import { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import MessagesList from '../components/MessagesList';
import ChatList from '../components/ChatList';



const ChatPage = () => {
    const refMessageText = useRef(null);

    const [messageText, setMessageText] = useState('');
    const [messageAuthor, setMessageAuthor] = useState('');

    const [chatList, setChatList] = useState([
        {
            id: '1',
            name: 'Общий',
            messages: [{ id: 1, text: "Добро пожаловать в Общий чат", author: '' }],
        },
        {
            id: '2',
            name: 'Закрытый',
            messages: [{ id: 1, text: "Добро пожаловать в Закрытый чат", author: '' }],
        }
    ]);


    let { idChat } = useParams();
    // Проверка на наличие чата
    let index = chatList.findIndex(el => el.id === idChat);
    if (!chatList[index]) {
        index = chatList[0].id;
    }



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


    useEffect(() => {
        setTimeout(() => {
            robotAnswer();
        }, 3000)
    }, [chatList]);


    useEffect(() => {
        focusFieldMessage();
    }, []);


    function robotAnswer() {
        const lastAuthor = chatList[index].messages[chatList[index].messages.length - 1];
        if (lastAuthor && lastAuthor.author) {
            sendMessage('Ок', '');
        }
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
                        <ChatList chatList={chatList} />
                    </Box>

                    <Box sx={{ m: 0.5 }} borderLeft={1} p={2}>
                        <h4>Сообщения</h4>
                        <div className="message_list">
                            <MessagesList messList={chatList[index].messages} />
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
                                <Button variant="contained" onClick={(e) => sendMessage(messageText, messageAuthor)}>Отправить</Button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>


        </div>
    )
}

export default ChatPage
