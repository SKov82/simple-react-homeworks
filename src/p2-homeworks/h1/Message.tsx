import React from 'react'
import classes from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageType) {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt="avatar"/>
            <span>
                {props.name}
            </span>
            <span>
                {props.message}
            </span>
            <span>
                {props.time}
            </span>
        </div>
    )
}
