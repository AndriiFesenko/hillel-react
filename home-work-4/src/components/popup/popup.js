import React, {useState, useEffect} from 'react'
import './popup.css'
export default function Popup(props) {
    const [{todosValue, todosId, isDone}, setTodosProperties] = useState({value: '', id: '', isDone: false});
    
    function onInputChange(e) {
        setTodosProperties({
            todosValue: e.target.value,
            todosId: todosId,
            isDone: isDone
        })
    }
    function saveTodoValue() {
        let todosId = Date.now();
        setTodosProperties(prevProps => ({
            ...prevProps,
            todosId: todosId
        }))
        
        props.onSave({todosValue, todosId, isDone});
    }
    return (
        <div className="todo-wrapper" style={props.style}>
            <div className="todo-popup">
                <h2>Heading</h2>
                <input 
                    type="text" 
                    placeholder="write a task"  
                    value={todosValue}
                    onChange={onInputChange}
                    ></input>
                <div className="button-wrapper">
                    <button onClick={saveTodoValue}>Save</button>
                    <button onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
