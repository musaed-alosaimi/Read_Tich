import React from 'react'
import { Button } from 'react-bootstrap';

function Chat() {

    let messages = [{ message: "Hello", type: "sender", time: "8 min" }, { message: "Hi", type: "reciever", time: "13 min" }];

    return (
        <div className="App">
            <header className="App-header">
                Chat
            </header>

            <div className="Container">

                <div className="chatBox">

                    {messages.map(({ message, time, type }) => {

                        let messageDivStyle = type == "sender" ?
                            { alignItems: "flex-start", } :
                            { alignItems: "flex-end", }

                        let messageBoxStyle = type == "sender" ?
                            { backgroundColor: "#53d769" } :
                            { backgroundColor: "#147efb" }

                        return <div className="messageDiv" style={messageDivStyle}>
                            <div className="messageBox" style={messageBoxStyle}>
                                {message}
                                <div className="whenSent">{time}</div>
                            </div>
                        </div>

                    })}

                    <div className="bottomBoxSend">
                        <textarea className="form-control" />
                        <Button variant="info">Send</Button>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default Chat