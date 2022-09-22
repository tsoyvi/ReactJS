import './css/style.css';

import React, { useState } from 'react';


function App(props) {

  const [messageList, setMessageList] = useState(
    [
      {
        id: '0',
        title: 'message_1',
        text: 'Lorem ipsum dolor sit amet,',
        author: 'ClassiK',
        date: '21.09.2022'
      },
      {
        id: '1',
        title: 'message_2',
        text: 'But I must explain to you how all this mistaken idea',
        author: 'Gauss',
        date: '21.09.2022'
      },
      {
        id: '2',
        title: 'message_3',
        text: 'On the other hand, we denounce with righteous indignation',
        author: 'NoName',
        date: '21.09.2022'
      },
    ]
  );

  const [state, setState] = useState(0);
  const [value, setValue] = useState('');
  const [MessageValue, setMessageValue] = useState('uyuy');

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <hr />
      <button onClick={() => setState(state - 1)}>-</button>
      <button onClick={() => setState(state + 1)}>+</button>
      <h4>{state}</h4>
      {messageList.map((item) => <div key={item.id}>
        <div className="alert alert-success" role="alert">
          <h5 className="alert-heading">{item.title}</h5>
          <p>{item.text}</p>
          <hr />
          <p className="mb-0">{item.author} {item.date}</p>
        </div>
      </div>
      )}

      <div className="form-group">
        <label for="exampleInputEmail1">Сообщение</label>
        <input type="text" class="form-control" value={MessageValue} onChange={(event) => setMessageValue(event.target.MessageValue)} />
      </div>

      <br />
      <div className="form-group">
        <button className="btn btn-primary" onClick={addMessage} >
          Отправить
        </button>
      </div>

    </div>
  );


  function addMessage() {
    setMessageList([...messageList, {
      id: messageList.length,
      title: 'message_' + (messageList.length + 1),
      text: MessageValue,
      author: 'NoName',
      date: new Date().toLocaleDateString()
    }]);
  }


}




/*
export function Counter() {
  const [count, setCount] = useState(0);
  return (
  <div>
  <span className="counter">{count}</span>
  <button className="counter-button">Click!</button>
  </div>
  )
  }
*/

export default App;
