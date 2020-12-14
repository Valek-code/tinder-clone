import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'



function ChatScreen() {

    const [input, setInput] = useState('')

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://image.made-in-china.com/202f0j00BUfGymoYnHbn/Fashion-Solid-Color-Lady-Bikini-Set-Sexy-Bikini-Hot-Girl.jpg',
            message: 'What up bruh'
        },
        {
            name: 'Ellen',
            image: 'https://image.made-in-china.com/202f0j00BUfGymoYnHbn/Fashion-Solid-Color-Lady-Bikini-Set-Sexy-Bikini-Hot-Girl.jpg',
            message: 'Wanna hook up'
        },
        {
            message: 'Sure thing girl'
        },
    ])

    const handleSend = e => {

        e.preventDefault();

        setMessages([...messages, { message: input }])
        setInput('');
    }


    return (
        <div className="chatScreen">

            <h2>Chat Screen</h2>
            <p className="chatScreen__timestamp"> YOU MATCHED WITH ELLEN ON 10/12/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message" >
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>   
                ) : (
                    <div className="chatScreen__message" >
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>  
                )
            ))}
            <div>

                <form className="chatScreen__input">

                    <input onChange={ e => setInput(e.target.value)} value={input} type="text" className="chatScreen__inputField" placeholder="Type a message..."/>
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button> 

                </form>

            </div>
        </div>
    )
}

export default ChatScreen