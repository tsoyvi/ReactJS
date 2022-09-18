import './css/style.css';
import Message from './components/Message';

const message = 'Тестовое сообщение';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello world!  {props.name}</h3>
      </header>

      <Message message ={message} />

    </div>
  );
}

export default App;
