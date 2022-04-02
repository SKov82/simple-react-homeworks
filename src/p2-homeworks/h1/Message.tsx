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
            <div className={classes.block}>
                <span className={classes.name}>
                    {props.name}
                </span>
                <p>
                    {props.message}
                </p>
                <span className={classes.time}>
                    {props.time}
                </span>
            </div>
        </div>
    )
}
