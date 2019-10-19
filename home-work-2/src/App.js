import React, { Component } from 'react';
import ContactsList from './components/contacts/ContactsList';
import ContactsForm from './components/contacts/ContactsForm';
import './App.css'

class App extends Component{
  state = {
    contacts: [
      {
        id: 1,
        name: 'Ivan',
        surname: 'Petrovich'
      },
      {
        id: 2,
        name: 'Petro',
        surname: 'Ivanovich'
      }
    ],
    activeUser: ['none'],
    formDisplay: 'block'
  }
  onAddContactClick = () => {
    this.changeFormState('block');
    // не очищается форма . Сделать очищение формы без затрагивания ДОМ элементов
    // this.setState({
    //   activeUser: [{
    //     name: '',
    //     surname: ''
    //   }]
    // })
    console.log(this.state.activeUser)
    // this.resetInput();
  }
  changeFormState(state) {
    this.setState({
      formDisplay: state
    })
  }
  onDeleteBttnClick = (e) => {
    e.preventDefault();
    let newArr = this.state.contacts;
    this.deleteElement(newArr);
    this.setState({
      contacts: newArr
    })
    this.changeFormState('none');
  }
  deleteElement(newArr) {
    let index = this.findElementByIndex(this.state.activeUser);
    newArr.pop(newArr[index])
  }
  onSaveBttnClick = (name,surname,e) => {
    e.preventDefault();
    name = name == '' ? this.state.activeUser.name : name;
    surname = surname == '' ? this.state.activeUser.surname : surname;
    // if activeUser variable is none then we create new user
    // else we change info on activeUser variable and set it to state
    this.state.activeUser == 'none' ? 
                          this.addNewUser(name,surname)
                          : this.changeContactInfo(name,surname);
    this.changeFormState('none');
  }
  addNewUser(inputName, inputSurname) {
    this.setState({
      contacts: [...this.state.contacts,
                this.newUserInfo(inputName, inputSurname)]
    });
  }
  newUserInfo(inputName, inputSurname) {
    return {
      id: Date.now(), 
      name: inputName,
      surname: inputSurname
    } 
  }
  changeContactInfo(contactName,contactSurname) {
    let newArr = this.state.contacts;
    this.setNewChanges(newArr,contactName,contactSurname);
    this.setState({
      contacts: newArr
    })
  }
  setNewChanges(newArr,contactName,contactSurname) {
    let index = this.findElementByIndex(this.state.activeUser);
    newArr[index] = {
      id:newArr[index].id,
      name:contactName,
      surname:contactSurname
    }
  }
  findElementByIndex(element){
    return this.state.contacts.indexOf(element);
  }
  resetInput() {
    document.getElementById('name').value = ''
    document.getElementById('surname').value = ''
  }
  onUserClick = (e) => {
    // this.resetInput();
    if(e.target.parentNode.className === 'user-wrapper'){
      this.changeFormState('block');
      this.renderUserInfo(e);
    }
  }
  renderUserInfo(e) {
    let clickedUserId = this.getUserId(e);
    let user = this.findUser(clickedUserId);
    this.setState({
      activeUser: user
    })
  }
  getUserId(e) {
    let userWrapper = e.target.closest('.user-wrapper');
    return userWrapper && userWrapper.getAttribute('id');
  }
  findUser(userId) {
    return this.state.contacts.find((contact) => contact.id == userId);
  }
  render() {
    return (
      <div className="container">
        <header className="App-header">Contacts</header>
        <div>
          <ContactsList 
            contacts={this.state.contacts}
            onAddContact={this.onAddContactClick}
            onUserClick={this.onUserClick}/>
          <ContactsForm 
            onSaveBttnClick={this.onSaveBttnClick}
            onDeleteBttnClick={this.onDeleteBttnClick}
            contact={this.state.activeUser}
            formDisplay={this.state.formDisplay}/>
        </div>
      </div>
    )
  }  
}

export default App;
