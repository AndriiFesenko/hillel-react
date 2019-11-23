import React from 'react';

export default function List({todos, removeTodo, toggleTodo}) {
    function setBgColor(el) {
        return el.isDone ? {backgroundColor: 'lightgreen'} : {}
    }
    return (
        <div className="todos-container">
            {todos.map((todo) => (
                <>
                    <div className="wrapper" 
                        style={setBgColor(todo)}
                        onClick={toggleTodo.bind(null,todo.id)}
                    >
                        <div key={todo.id}>
                            {todo.title}
                        </div>
                        <button 
                            onClick={removeTodo.bind(null,todo.id)}
                            >
                                delete
                        </button>
                    </div>
                </>
            ))}
        </div>
    )
}
