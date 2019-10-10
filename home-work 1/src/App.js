import React, { Component } from 'react'
import UserList from './components/UserList'

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Андрей',
        surname: 'Фесенко',
        age: '23',
        tel: '0985168071'
      },
      {
        id: 2,
        name: 'Иван',
        surname: 'Иванов',
        age: '22',
        tel: '0993853385'
      },
      {
        id: 3,
        name: 'Петр',
        surname: 'Петров',
        age: '33',
        tel: '0636000302'
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <UserList usersObj={this.state.users} />
      </div>
    )
  }
}


export default App
