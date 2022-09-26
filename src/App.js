import './css/style.css';

import { useEffect, useState } from 'react';
import MessagesList from './components/MessagesList';


function App(props) {

  const [messageList, setMessageList] = useState([]);

  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');

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
  }


  useEffect(() => {
    setTimeout(() => {
      robotAnswer();
    }, 3000)
  }, [messageList]);


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

  return (

    <div className="w-50 p-3">

      <MessagesList messList={messageList} />

      <form onSubmit={sendMessage}>
        <div className="form-group">
          <label>Сообщение</label>
          <input type="text" className="form-control" value={messageText} onChange={(event) => setMessageText(event.target.value)} />
        </div>

        <div className="form-group">
          <label>Автор</label>
          <input type="text" className="form-control" value={messageAuthor} onChange={(event) => setMessageAuthor(event.target.value)} />
        </div>

        <br />
        <div className="form-group">
          <button className="btn btn-primary" type='submit' >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );

  /*
  
  */




}




export default App;
