import React from 'react'
import './todoItem.css'

export default function TodoItem(props) {
    function changeState() {
        props.changeIsDoneState(props.todo.todosId, !props.todo.isDone);
    }
    function checkMarkStyle() {
        return props.todo.isDone == false ? '0' : '1';
    }
    function onDeleteBttnClick() {
        props.deleteTodo(props.todo);
    }
    return (
            <div className="item-wrapper">
                <span style={{'opacity': checkMarkStyle()}}>v</span>
                <li onClick={changeState}>{props.todo.todosValue}</li>
                <button onClick={onDeleteBttnClick}>delete</button>
            </div>
    )
}
