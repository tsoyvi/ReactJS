/*
Тестовый компонент 
*/
function Message(props) {
    return (
        <div className="test-message">
            {props.message}
        </div>
    );
}

export default Message;