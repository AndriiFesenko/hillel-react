import React from 'react'
import './button.css'
export default function Button(props) {
    return (
        <button onClick={props.onBttnClick}>Add new task</button>
    )
}
