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
    activeUser: ['none']
  }
  onAddContactClick = () => {
    // hide delete button
    this.hideElement(document.getElementById('delete'));
    this.showElement(document.getElementsByTagName('form')[0]);
    this.setState({
      activeUser: ['none']
    })
    this.resetInput();
  }
  showElement(element) {
    element.style.display = 'block';
  }
  hideElement(element) {
    element.style.display = 'none';
  }
  onDeleteBttnClick = (e) => {
    e.preventDefault();
    let newArr = this.state.contacts;
    this.deleteElement(newArr);
    this.setState({
      contacts: newArr
    })
    this.hideElement(document.getElementsByTagName('form')[0]);
  }
  deleteElement(newArr) {
    let index = this.findElementByIndex(this.state.activeUser);
    newArr.pop(newArr[index])
  }
  onSaveBttnClick = (e) => {
    e.preventDefault();
    // if activeUser variable is none then we create new user
    // else we change info on activeUser variable and set it to state
    this.state.activeUser == 'none' ? 
                          this.addNewUser()
                          : this.changeContactInfo();
    this.hideElement(document.getElementsByTagName('form')[0]);
  }
  addNewUser() {
    let inputName = document.getElementById('name');
    let inputSurname = document.getElementById('surname');
    this.setState({
      contacts: [...this.state.contacts,
                this.newUserInfo(inputName, inputSurname)]
    });
  }
  newUserInfo(inputName, inputSurname) {
    return {
      id: Date.now(), 
      name: inputName.value,
      surname: inputSurname.value
    } 
  }
  changeContactInfo() {
    let newArr = this.state.contacts;
    this.setNewChanges(newArr);
    this.setState({
      contacts: newArr
    })
  }
  setNewChanges(newArr) {
    let contactName = document.getElementById('name').value;
    let contactSurname = document.getElementById('surname').value;
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
    this.resetInput();
    if(e.target.parentNode.className === 'user-wrapper'){
      this.showElement(document.getElementsByTagName('form')[0]);
      this.renderUserInfo(e);
      this.showElement(document.getElementById('delete'))
    }
  }
  renderUserInfo(e) {
    let clickedUserId = this.getUserId(e);
    let user = this.findUser(clickedUserId);
    this.setState({
      activeUser: user
    })
    this.fillForm(user);
  }
  getUserId(e) {
    let userWrapper = e.target.closest('.user-wrapper');
    return userWrapper && userWrapper.getAttribute('id');
  }
  findUser(userId) {
    return this.state.contacts.find((contact) => contact.id == userId);
  }
  fillForm(user) {
    let inputName = document.getElementById('name');
    let inputSurname = document.getElementById('surname');
    inputName.value = user.name;
    inputSurname.value = user.surname;
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
            onDeleteBttnClick={this.onDeleteBttnClick}/>
        </div>
      </div>
    )
  }  
}

export default App;
