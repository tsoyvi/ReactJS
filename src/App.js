import './css/style.css';

import { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import MessagesList from './components/MessagesList';
import ChatList from './components/ChatList';
import NavBar from './components/NavBar';


function App(props) {

  const refMessageText = useRef(null);
  const [messageList, setMessageList] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');

  const [chatList, setChatList] = useState([
    {
      id: 1,
      name: 'Общий'
    },
    {
      id: 2,
      name: 'Закрытый'
    }
  ]);

  const sendMessage = (event) => {
    event.preventDefault();

    setMessageList(prevState => [...prevState, {
      id: messageList.length,
      title: 'message_' + (messageList.length + 1),
      text: messageText,
      author: messageAuthor,
      date: new Date().toLocaleDateString()
    }]);

    setMessageText('');
    setMessageAuthor('');
    focusFieldMessage();
  }


  useEffect(() => {
    setTimeout(() => {
      robotAnswer();
    }, 3000)
  }, [messageList]);

  useEffect(() => {
    focusFieldMessage();
  }, []);


  function robotAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [...prevState, {
        id: messageList.length,
        title: 'message_' + (messageList.length + 1),
        text: 'Сообщение отправлено',
        date: new Date().toLocaleDateString()
      }]);
    }
  }

  function focusFieldMessage() {
    refMessageText.current.focus();
  }

  return (
    <>
      <NavBar />

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'baseline' }}>

          <Box sx={{ m: 1, width: 200 }} >
            <h4>Список чатов</h4>
            <ChatList chatList={chatList} />
          </Box>

          <Box sx={{ m: 0.5 }} borderLeft={1} p={2}>
            <h4>Сообщения</h4>
            <div className="message_list">

              <MessagesList messList={messageList} />
            </div>


            <form onSubmit={sendMessage}>
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
                <Button type="submit" variant="contained">Отправить</Button>
              </div>
            </form>
          </Box>
        </Box>
      </Box>
    </>



  );

  /*
  
  */




}




export default App;
