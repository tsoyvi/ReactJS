
function MessagesList(props) {
    return (
        <div>
            {props.messList.map((item) => <div key={item.id}>
                <div className="alert alert-success" role="alert">
                    <h5 className="alert-heading">{item.title}</h5>
                    <p>{item.text}</p>
                    <hr />
                    <p className="mb-0">{item.author} {item.date}</p>
                </div>
            </div>
            )}
        </div>
    );
}

export default MessagesList;