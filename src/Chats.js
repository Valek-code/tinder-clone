import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">

            <Chat
                name="Ellen"
                message="Sure thing girl"
                timestamp="40 seconds ago"
                profilePic="https://image.made-in-china.com/202f0j00BUfGymoYnHbn/Fashion-Solid-Color-Lady-Bikini-Set-Sexy-Bikini-Hot-Girl.jpg"
            />
            <Chat
                name="Lucy"
                message="Let's go out to eat next week"
                timestamp="3 hours ago"
                profilePic="https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000575877692.jpg"
            />
            <Chat
                name="Mary"
                message="I'd love that <3"
                timestamp="10 seconds ago"
                profilePic="https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg"
            />

        </div>
    )
}

export default Chats;