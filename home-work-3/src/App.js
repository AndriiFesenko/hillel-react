import React from 'react';
import './App.css';
import NoteList from './noteList/NoteList'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tasks:[]
    }
  }
  componentWillMount() {
    this.getLocalStorageItems();
  }
  getLocalStorageItems() {
    let storageKeys = Object.keys(localStorage);
    let storageItems = storageKeys.map((current) => {
      return current.includes('task') && JSON.parse(localStorage.getItem(current));
    })
    this.setState({
      tasks: storageItems
    })
  }
  createNote = () => {
    this.setState({
      tasks: [...this.state.tasks, this.addTask()]
    })
    
  }
  addTask() {
    let task = {
      id: 'task' + Date.now(),
      heading: '',
      body: ''
    }
    return task;
  }

  onSave = (e, data) => {
    this.setContext(e, data);
    this.setState({
      tasks: [...this.state.tasks]
    })
  }
  setContext(e, data) {
    let element = this.state.tasks.find((el) => el.id === e.target.closest('li').id);
    element.heading = data.heading;
    element.body = data.body;
    this.sendDataToLocalStorage(element)
  }
  sendDataToLocalStorage(element) {
    localStorage.setItem(element.id, JSON.stringify(element));
  }
  onDelete = (task) => {
    localStorage.removeItem(task.id)
    let filteredTasks = this.state.tasks.filter((el) => el.id != task.id);
    this.setState({
      tasks: filteredTasks
    })
  }
  render(){
    return (
      <div className="container">
        <div className="task-list-header">
          <span>TASK LIST</span>
          <input
            type="button" 
            value="Добавить заметку" 
            onClick={this.createNote}
          />
        </div>
        <div className="task-list-body">
          <NoteList 
            tasks={this.state.tasks} 
            onSave={this.onSave}
            onDelete={this.onDelete}
          />
        </div>
      </div>
    )
  }
}

export default App;
