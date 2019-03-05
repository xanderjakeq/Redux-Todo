import React from 'react'
import {Circle, CheckCircle, X} from 'react-feather'

export default (props) => {
    return (
        <li>
            <div onClick = {() => props.toggleComplete(props.data.id)}>{props.data.isCompleted ? <CheckCircle/> : <Circle/>}</div>
            <p className = {props.data.isCompleted ? 'complete' : null}>{props.data.value}</p>
            <X onClick = {() => props.delete(props.data.id)} className = 'deleteButton'/>
        </li>
    )
}