import React from 'react'
import TodoItem from '../todoItem/TodoItem'
import './todoList.css'
export default function TodoList(props) {
    return (
        <ul>
            <li className="task-list-heading">TASK-LIST</li>
            {
                props.todos.map((currentTodo) => (
                <TodoItem 
                    key={currentTodo.todosId} 
                    todo={currentTodo} 
                    changeIsDoneState={props.changeIsDoneState}
                    deleteTodo={props.onDelete}
                    />
                ))
            }
        </ul>
    )
}
