
// const ColorContext = React.createContext('white');
import React, {useState} from 'react'
import './App.css';
import TodoList from './components/todoList/TodoList'
import Button from './components/todo-button/Button'
import Popup from './components/popup/popup'

export default function App() {
  const [popupStyle, setPopupStyle] = useState({});
  const [todos, setTodos] = useState([
    {
      todosValue: 'buy some food',
      todosId: 1,
      isDone: false
    },
    {
      todosValue: 'make a lunch',
      todosId: 2,
      isDone: false
    },
    {
      todosValue: 'get a haircut',
      todosId: 3,
      isDone: true
    },
    {
      todosValue: 'visit an office',
      todosId: 4,
      isDone: true
    },
    {
      todosValue: 'meeting at 3pm',
      todosId: 5,
      isDone: false
    }
  ]);

  function openPopup() {
    setPopupStyle({'display' : 'flex'});
  }
  function closePopup() {
    setPopupStyle({'display' : 'none'});
  }
  function onBttnClick() {
    openPopup();
  }
  function onCancelBttnClick() {
    closePopup();
  }
  function saveTodo(newTodo) {
    setTodos([...todos, newTodo]);
    closePopup();
  }
  function deleteTodo(element) {
    let newArr = todos.filter((currentTodo) => currentTodo.todosId !== element.todosId);
    setTodos(newArr);
  }
  function changeIsDoneState(todosId, newIsDoneState) {
    let element = todos.find(currentTodo => currentTodo.todosId == todosId);
    element.isDone = newIsDoneState;
    setTodos([...todos])
  }
  return (
    <div>
      <Button onBttnClick={onBttnClick}/>
      <TodoList 
        todos={todos}
        changeIsDoneState={changeIsDoneState}
        onDelete={deleteTodo}
        />
      <Popup 
        style={popupStyle} 
        onCancel={onCancelBttnClick} 
        onSave={saveTodo}
        />
    </div>
  )
}

