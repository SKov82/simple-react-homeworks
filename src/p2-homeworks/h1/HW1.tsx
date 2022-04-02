import React from 'react'
import {Message} from './Message';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Some text много много само текста, очень много разного текста ага огоитьи',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={'some text'}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
