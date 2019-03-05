import React from 'react'
import {Circle, CheckCircle, X} from 'react-feather'

export default (props) => {
    return (
        <li>
            <div onClick = {() => props.toggleComplete(props.idx)}>{props.data.isCompleted ? <CheckCircle/> : <Circle/>}</div>
            <p>{props.data.value}</p>
            <X onClick = {() => props.delete(props.data.id)}/>
        </li>
    )
}